//a function returning number of days remaining from today
function numDaysLeft(yyyy,mm,dd){
	dt1 = new Date(); // today
	dt2 = new Date(yyyy,mm,dd);
	return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));

}
