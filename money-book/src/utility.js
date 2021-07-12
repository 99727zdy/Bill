// 固定常量  代替手写字符串
export const LIST_VIEW="list"
export const CHART_VIEW="chart"


export const padLeft = (n) =>{
  return n<10 ? "0" + n :n
}

//怎样生成一个连续的数组 并且给它一个初始值
export const range = (size,startAt=0)=>{
  const arr =[]
  for(let i=0;i<size;i++){
    arr[i]=startAt+i
  }
  return arr
}