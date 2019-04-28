//函数名：removeRepeat
//函数功能：把数组中重复的元素去除掉。（不能使用set）
//参数：有重复元素的数组，
//返回值：无重复元素的数组，

function removeRepeat(arr){
    for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length;j++){
			if(arr[i]==arr[j]){
				arr.splice(j,1);
				j--;
			}
		}
	}
	return arr;
}


// 函数名：myconcat
// 功能：把两个数组合并，并去掉重复的元素：（不能使用官方函数concat）
// 参数：两个数组
// 返回值：合并后，没有重复元素的数组；

function myconcat(arr,arr1){
	for(let i=0;i<arr1.length;i++){
		arr.push(arr1[i]);
	}
	return removeRepeat(arr);
}

// 新加：
// Let arr=[1,2,3,4,5,6,7,8,9]
//改变原数组为[1,4,7,2,5,8,3,6,9]
function compare1(a,b){
	return a-b;
}	



