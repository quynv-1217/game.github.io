
<template>
  <div class="body-rankings transition bg-repeat-y pt-3 relative text-black bg-yellow-100 w-100">
    <img src="@/assets/images/conner-left.svg" class="absolute top-0 left-0" />

    <div  id="ranking-tables"  class="sm:container  text-white p-10">
      <div class="w-full top-three text-center items-center">
        <div class="w-full lg:w-3/4 xxl:w-1/2 font-svn mt-32 mx-auto md:grid grid-cols-3 gap-16">
          <div  v-if="_get(topCtf, 'name')"  class="tops-col flex flex-col justify-between p-5 wow slideInLeft">
              <img src="@/assets/images/medals/top1-ctf.png" class="mx-auto w-2/3 mt-32" />
              <div class="my-10 mb-20 overflow-hidden truncate">
                <b class="font-open-sans text-lg"> TOP 1 CTF </b> <br> <br>
                <span class="uppercase text-3xl text-ellipsis overflow-hidden truncate"> {{ _get(topCtf, 'name') }} </span>
              </div>
          </div>
          <div v-if="_get(topFinal, 'name')" class="tops-col flex flex-col mt-5 md:mt-0 p-5 wow slideInLeft">
              <img src="@/assets/images/medals/top1-all.png" class="mx-auto w-3/4 mt-16" />

              <div class="my-10 mb-20 overflow-hidden truncate">
                <b class="font-open-sans text-lg"> TOP 1 chung cuộc </b> <br> <br>
                <span class="uppercase text-3xl"> {{ _get(topFinal, 'name') }}</span>
              </div>
          </div>
          <div v-if="_get(topCode, 'name')" class="tops-col flex flex-col mt-5 md:mt-0 justify-between p-5 wow slideInLeft">
              <img src="@/assets/images/medals/top1-code.png" class="mx-auto w-2/3  mt-32" />

              <div class="my-10 mb-20 overflow-hidden truncate">
                <b class="font-open-sans text-lg"> TOP 1 Code </b> <br> <br>
                <span class="uppercase text-3xl"> {{ _get(topCode, 'name') }} </span>
              </div>
          </div>
        </div>
      </div>
      <div class="rankings mt-10 mb-10 sm:mt-36">
        <div class="font-svn text-5xl lg:text-8xl relative text-center rankings-header pb-10">
          <img src="@/assets/images/cup.png" class="w-1/5 lg:w-1/4 mx-auto mb-10 sm:hidden bottom-0 left-0" />
          bảng xếp hạng 
          <img src="@/assets/images/cup.png" class="w-1/5 lg:w-1/4 float-x mx-auto absolute hidden sm:block bottom-0 -left-20 xxl:left-0" />
        </div> 
        <div class="mb-10 flex justify-center">
          <img width="40" title="Tải lại" src="@/assets/images/icons/refresh.svg" @click="fetchData" class="transition hover:scale-110 cursor-pointer" />
        </div>
        <div class="mx-auto transition ranking-table-cover mt-4">
          <RankingTable 
            :rankings="rankings"
            :loading="loading"
            :error="error"
            :top-code="topCode"
            :top-ctf="topCtf"
            :top-final="topFinal"
          />
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
  import RankingTable from './RankingTable.vue';
  import _orderBy from 'lodash/orderBy';
  import _get from 'lodash/get';
  import _filter from 'lodash/filter';

  const codeHost = import.meta.env.VITE_CODE_HOST
  const ctfHost = import.meta.env.VITE_CTF_HOST
  const codeContest = import.meta.env.VITE_CONTEST_CODE_HASHID
  const ctfContest = import.meta.env.VITE_CONTEST_CTF_HASHID

  export default {
    components: {
      RankingTable,
    },
    data() {
      return {
        rankings: [],
        loading: false,
        error: false,
        dataCodeRaw: [],
        dataCtfRaw: [],
        topCode: {},
        topCtf: {},
        topFinal: {},
      }
    },
    computed: {
      topCode () {
        return _get(_orderBy(this.dataCodeRaw, ['score'], ['desc']), '0');
      },
      topCtf () {
        return _get(_orderBy(this.dataCtfRaw, ['score'], ['desc']), '0');
      },
      topFinal () {
        return _get(_orderBy(this.rankings, ['total_score'], ['desc']), '0');
      }
    },
    async mounted () {
      await this.fetchData();
    },

    methods: {
      _get,
      async fetchDataCode () {
        try {
          this.loading = true;
          const dataCode  = await fetch(
            `${codeHost}/api/public/contests/${codeContest}/leaderboard`
          ).then((response) => response.json())
          this.dataCodeRaw = dataCode ? dataCode : [];
        } catch (e) {
          this.dataCodeRaw = [];
        } finally {
          this.loading = false;
        }
      },

      async fetchDataCtf () {
        try {
          this.loading = true;
            const { data: dataCtf } = await fetch(
            `${ctfHost}/api/public/contests/${ctfContest}/leaderboard`
          ).then((response) => response.json())

          this.dataCtfRaw = dataCtf;
        } catch (e) {
          this.dataCtfRaw = [];
        } finally {
          this.loading = false;
        }
      },

      async fetchData () {
        this.loading = true;
        await this.fetchDataCode()
        await this.fetchDataCtf()
      
        this.calculateScore()
        this.loading = false;
      },

      calculateScore () {
          let arrayCtfName = this.dataCtfRaw.length > 0 ? this.dataCtfRaw.map(item => item.name) : [];
          let arrayCodeName = this.dataCodeRaw.length > 0 ? this.dataCodeRaw.map(item => item.name) : [];
          let teamsName =  arrayCtfName.concat(arrayCodeName.filter((item) => arrayCtfName.indexOf(item) < 0));


          let rankings = teamsName.map(item => {
            let matchCode = _get(_filter(this.dataCodeRaw, i => i.name.toLowerCase() === item.toLowerCase()), '0')
            let matchCtf = _get( _filter(this.dataCtfRaw, i => i.name.toLowerCase() === item.toLowerCase()), '0')
         
            return {
              name: item,
              score_ctf: _get(matchCtf, 'score', 0),
              score_code: _get(matchCode, 'score', 0),
              total_score: this.sumScore(_get(matchCtf, 'score', 0),  _get(matchCode, 'score', 0))
            };
          });
          rankings = this.sortScore(rankings)

          this.rankings = this.assignRank(this.sortScore(rankings));        
      },
      sortScore(array, key = "total_score") {
        return _orderBy(array, [key], ['desc']);
      },

      assignRank(array) {
        return array.map((item, index) => {
          return {
            rank: index + 1,
            ...item,
          }
        });
      },
      sumScore(scoreCode, scoreCtf)
      {
        return parseInt(scoreCode, 10) + parseInt(scoreCtf, 10);
      },
    }
  }
</script>
<style scoped>
.body-rankings {
  background-image: url('../assets/images/background-body.png');
  background-size: 100%;
}
@media (max-width: 640px) {
  .ranking-table-cover {
    max-width: 100%;
    overflow-x: scroll;
  }
}

.rankings-header {
  text-shadow: 0px 3px 3px #43dcff;
}
.tops-col {
  background: linear-gradient(180deg, #0D2755 3.25%, rgba(15, 45, 100, 0.97) 13.74%, rgba(17, 55, 124, 0.92) 34.71%, rgba(18, 58, 132, 0.9) 50.91%, rgba(16, 53, 122, 0.91) 63.31%, rgba(12, 40, 94, 0.95) 81.42%, #07193F 98.58%);
}
</style>
