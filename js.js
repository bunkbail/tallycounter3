var ManualTallyMetrics = new Array();
	
function AddManualTally(metric) {
    if (isNaN(ManualTallyMetrics[metric]) === true) {
        ManualTallyMetrics[metric] = 1;
    } else {
        ManualTallyMetrics[metric] += 1;
    }
    UpdateMetric(metric);
}

function RemoveManualTally(metric) {
    if (isNaN(ManualTallyMetrics[metric]) === true) {
        ManualTallyMetrics[metric] = 0;
    } else {
        ManualTallyMetrics[metric] -= 1;
    }
    UpdateMetric(metric);
}

function UpdateMetric(metric) {
	var element = document.querySelectorAll('[data-tallykey^="' + metric + '"]');
	element[0].innerText = ManualTallyMetrics[metric];
}

function total() {
  document.getElementById("data1").colSpan = "5";
  document.getElementById("data2").style.visibility = "hidden";
  document.getElementById("data3").style.visibility = "hidden";
  document.getElementById("data4").style.visibility = "hidden";
  document.getElementById("data5").style.visibility = "hidden";
  document.getElementById("data1").innerHTML = parseInt(document.getElementById("data1").innerHTML) + parseInt(document.getElementById("data2").innerHTML) + parseInt(document.getElementById("data3").innerHTML) + parseInt(document.getElementById("data4").innerHTML) + parseInt(document.getElementById("data5").innerHTML);
}

function indv() {
  document.getElementById("data1").colSpan = "1";
  
 document.getElementById("data2").style.visibility = "visible";
document.getElementById("data3").style.visibility = "visible";
document.getElementById("data4").style.visibility = "visible";
document.getElementById("data5").style.visibility = "visible";
  
  document.getElementById("data1").innerHTML = parseInt(document.getElementById("data1").innerHTML) - parseInt(document.getElementById("data2").innerHTML) - parseInt(document.getElementById("data3").innerHTML) - parseInt(document.getElementById("data4").innerHTML) - parseInt(document.getElementById("data5").innerHTML);
}
