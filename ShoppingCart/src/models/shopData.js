// import ShopData from '../assets/ShopData'
import Shop from '../services/ShopData'

export default {
  namespace: 'shopData',
  state: {
    productData: [],
    backupData: [],
  },
  effects: {
    *GetData({ payload }, { put,call}) {
      const res = yield call(Shop.getProducts);
      console.log(res);

      if (res) {
        yield put({
          type: 'setProductData',
          data: res.data.products
        })
        yield put({
          type: 'setStaticData',
          data: res.data.products
        })
      }else{
        alert("API调用出现问题")
        console.log("API调用出现问题");
        
      }
    },
    *screenData({ payload:{data,key,i} }, { call,put }) {
      let res=[]
      if(i){
        res = yield call(Shop.getScreen,data,key);
      }else{
        res = yield call(Shop.getCollate,data,key);
      }
      // res = yield call(Shop.getCollate,data,key);
      console.log("/////////////////",res);
      
      yield put({
        type: 'setData',
        data: [...res]
      })
    }
  },
  reducers: {
    setProductData(state, payload) {
      return {
        ...state,
        productData: payload.data
      }
    },
    setStaticData(state, payload) {
      return {
        ...state,
        backupData: payload.data
      }
    },
    setData(state, payload) {
      return {
        ...state,
        productData: payload.data
      }
    }
  }
}