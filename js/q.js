$(document).ready(function() {
    var fieldHTML = '<div><input type="text" name="field_name[]" value=""/><a href="javascript:void(0);" class="remove_button"><img src="remove-icon.png"/></a></div>'


    $('#add-btn').on('click', function(event) {

        $('#list').append(fieldHTML);
    });
});