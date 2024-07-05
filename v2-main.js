// center map around new design

// adapt responsives first
if(window.innerWidth > 1100 && window.innerWidth <= 1500){
    map.setView([46.514, -4.043], 6);
}else if(window.innerWidth > 910 && window.innerWidth <= 1100){
    map.setView([46.950, -8.701], 5);
}else if(window.innerWidth > 815 && window.innerWidth <= 910){
    map.setView([46.830, -8.218], 5);
}else if(window.innerWidth <= 815){
    map.setView([46.498, 2.791], 5);
}else{
    // or default
}



// fetch list from ./data/*  ; add other files variables if needed
var v2ListRaw = [json_154circonscriptionslegislativesp10_1_2];
// iterate all file variables
var v2ListFormatted = v2FormatList(v2ListRaw);

// if list is complete, proceed
if(v2ListFormatted.success){
    // add count to navigation
    v2AddCountToNavigation(v2ListFormatted);
}
