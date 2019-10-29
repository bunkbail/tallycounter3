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
