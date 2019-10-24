//升序冒泡排序
function ascOrder(arr){
	//升序
	for (var i = 0; i < arr.length-1; i++) {
		
		var isSorted = true;//排序优化,假设已排序完毕，没有再发生数据交换
		for (var j = 0; j < arr.length-1-i; j++) {
			
			if (arr[j]>arr[j+1]) {
				var tmp = arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=tmp;
				isSorted = false;//发生了交换，排序未完成
			}
		}
		if (isSorted) {
			break;
		}
		
	}
	return	arr;
}


//降序冒泡排序
function descOrder(arr){
	//降序
	for (var i = 0; i < arr.length-1; i++) {
		
		var isSorted = true;//排序优化,假设已排序完毕，没有再发生数据交换
		for (var j = 0; j < arr.length-1-i; j++) {
			
			if (arr[j]<arr[j+1]) {
				var tmp = arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=tmp;
				isSorted = false;//发生了交换，排序未完成
			}
		}
		if (isSorted) {
			break;
		}
		
	}
	return	arr;
}

//求最大值
function	getMax(arr){
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (max<arr[i]) {
			max=arr[i];
		}
	}
	return  max;
}	

//求最小值
function	getMin(arr){
	var min = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (min>arr[i]) {
			min=arr[i];
		}
	}
	return	min;
}

//判断是否是素数(质数)
function	isPrimeNumer(n){
	var result=true;
	for (var i = 2; i < n; i++) {
		if (n%i===0) {
			result = false;
			break;
		}
	}
	return	result;
}

//求n的阶乘(n!)	n! = 1*2*3*...*n
function	getJieCheng(n){
	var sum=1;
	for (var i = 1; i <= n; i++) {
		sum *= i;
	}
	return sum;
}

//求n的阶乘和		1！+ 2！+ 3！+...+ n!
function	getJieChengHe(n){
	var sum=0;
	for (var i = 1; i <= n; i++) {
		sum += getJieCheng(i);
	}
	return	sum;
}		


//形参数量未知，求最大值
function	getMAX(){
	//函数未定义形参时，代表形参数量未知，调用时可传0至多个实参
	//arguments是函数的形参集合，我们可以通过arguments来获取调用时所传的实参
	// arguments非常像数组，但不是数组

	var max=arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		if (max<arguments[i]) {
			max=arguments[i];
		}
	}
	return max;
}

//形参数量未知，求最小值
function	getMIN(){
	var min=arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		if (min>arguments[i]) {
			min=arguments[i];
		}
	}
	return min;
}


//任意数量的数字求和
function	getSUM(){
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i]
	}
	return	sum;
}


//求斐波那契Fibonacci数列中的第n个数是多少？
//斐波那契数列：1 1 2 3 5 8 13 21 。。。
function	getFib(n){
	var n1 = 1;
	var n2 = 1;
	var n3;
	for (var i = 3; i <= n; i++) {
		n3 = n1 + n2;
		n1 = n2;
		n2 = n3;
	}
	return	n3;
}

//反转数组，返回新数组
function reverseArray(array){
	var newArr = [];
	for (var i = array.length-1; i >= 0; i--) {
		newArr[newArr.length] = array[i];
	}
	return	newArr;
}

//判断一个年份是否是闰年【闰年：能被4整除并且不能被100整除，或者能被400整除的年份】
function	isRunNian(year){
	var result = false;//假设不是闰年
	if ((year % 4 === 0 && year % 100 !== 0)||(year % 400 === 0)) {
		result = true;
	}
	return	result;
}


//判断一个日期是当年的第几天
function 	getDays(year,month,day){
	//计算总共多少天
	var days = day;//当前月份的天数
	for (var i = 1; i < month; i++) {
		switch (i){
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				days += 31;
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				days += 30;
				break;
			case 2:
				//判断该年份是闰年还是平年
				if (isRunNian(year)) {
					days += 29;//闰年
				}else{
					days += 28;//平年
				}
				break;
		}
	}

	return	days;
}








