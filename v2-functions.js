// check if object has iterable array
function v2HasIterableArray(object, key){
    return (
        object.hasOwnProperty(key) &&
        typeof object[key] === 'object' &&
        object[key].constructor === Array &&
        object[key].length > 0
    );
}

// check if object has iterable object
function v2HasIterableObject(object, key){
    return (
        object.hasOwnProperty(key) &&
        typeof object[key] === 'object' &&
        Object.keys(object[key]).length > 0
    );
}

// format data to separate cases by tag and name
function v2FormatList(list_complete){
    // iterate all data files
    var data_list = {
        "ordered" : {},
        "named": {}
    };

    var count_original = 0;
    var count_formatted = 0;

    // iterate files variables
    for (var i = 0; i < list_complete.length; i++) {
        var list_single = list_complete[i];
        // look for features
        if(
            v2HasIterableArray(list_single, 'features')
        ){
            // update count for control
            count_original = count_original + list_single.features.length;

            // iterate features
            for (var j = 0; j < list_single.features.length; j++) {
                var feature = list_single.features[j];
                // look for properties
                if(
                    v2HasIterableObject(feature, 'properties')
                ){
                    // remap properties according to present fields
                    var mapped = {};
                    var prop_keys = Object.keys(feature.properties);
                    for (var k = 0; k < prop_keys.length; k++) {
                        var key = prop_keys[k];
                        var value = feature.properties[key];

                        // check property key against v2-data_model:data_model_single (ex : Field14)
                        var splitted = key.split('_Field');
                        var check = 'Field' + splitted[1];

                        // prepare key to use i newly mapped property
                        var prop_key = check;

                        // fetch from model if exists
                        if(data_model_single.hasOwnProperty(check)){
                            var t = data_model_single[check]['key'];
                            if(t !== ""){
                                prop_key = t;
                            }
                        }

                        // update mapped object
                        var obj = {}
                        obj[prop_key] = value;

                        mapped = Object.assign(mapped, obj);
                    }

                    // prepare name
                    var name = mapped.fullname;
                    name = name.replace('\n', '');

                    // re-use mapped to order using tag
                    if(
                        mapped.hasOwnProperty('tag') &&
                        mapped.tag !== ""
                    ){
                        // merge duplicate occurences
                        var tag = mapped.tag;
                        if(tag === 'homophobie'){
                            tag = 'homophobe';
                        }
                        if(tag === 'violence'){
                            tag = 'violent'
                        }
                        if(tag === 'conspirationniste'){
                            tag = 'complotiste'
                        }
                        if(tag === 'fraude'){
                            tag = "coupable de fraude"
                        }
                        if(tag === null){
                            tag = 'un peu de tout';
                        }

                        // clean tag key
                        tag = tag.replace('"', '');
                        tag = tag.replace("'", '');
                        tag = tag.trim();

                        // add to list ordered by tag
                        if(!data_list.ordered.hasOwnProperty(tag)){
                            data_list.ordered[tag] = [];
                        }

                        data_list.ordered[tag].push(mapped);

                        // add to list ordered by name
                        if(!data_list.named.hasOwnProperty(name)){
                            data_list.named[name] = {};
                        }
                        if(!data_list.named[name].hasOwnProperty(tag)){
                            data_list.named[name][tag] = [];
                        }

                        data_list.named[name][tag].push(mapped);

                        // update count for control
                        count_formatted = count_formatted + 1;
                    }

                }
            }
        }
    }

    var success = true;
    // return results
    if(count_original !== count_formatted){
        success = false;
    }

    return {
        success: success,
        list: data_list,
    };
}

function v2AddCountToNavigation(formatted){
    // find all navigation items, and add count
    var navItems = document.querySelectorAll('[data-tag]');
    for (var i = 0; i < navItems.length; i++) {
        var navItem = navItems[i];
        var attr = navItem.dataset.tag;
        // check if tag attr exists in ordered list
        if(formatted.list.ordered.hasOwnProperty(attr)){
            navItem.querySelector('.count').innerHTML = formatted.list.ordered[attr].length;
        }
    }
}

