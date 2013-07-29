$(function() {
    if ($('#poll_type').val() == 1) {
        $('#poll_type_content').html('Owner can\'t view and public voter name !').fadeIn();
        $('#result_detail_type').val(2);
        $('#result_detail_type_content').html('Show only percentage of each choice!').fadeIn();
        $('#result_detail_type').attr('disabled', 'true');
    }
    $('#poll_type').change(function() {
        var type = $(this).val();
        if (type == 1) {
            $("#result_detail_type").val(2);
            $('#result_detail_type').attr('disabled', 'true');
            $('#result_detail_type_content').html('Show only percentage of each choice!').fadeIn();
            $('#poll_type_content').html('Owner can\'t view and public voter name !').fadeIn();
        }
        else {
            $('#poll_type_content').html('Owner can view and public voter name !').fadeIn();
            $('#result_detail_type').removeAttr('disabled');
        }
    });

    $('#display_type').change(function() {
        var type = $(this).val();
        $('#display_type_content').fadeOut(function() {
            if (type == '1') {
                var html = 'All user can see and all user can vote!';
            }
            else if (type == '2') {
                var html = 'All user can see and invited user can vote!';
            }
            else {
                var html = 'Invited user can see and invited user can vote!';
            }
            $('#display_type_content').html(html).fadeIn();
        });
    });

    $('#result_display_type').change(function() {
        var type = $(this).val();
        $('#result_display_type_content').fadeOut(function() {
            if (type == '1') {
                var html = 'All user who can access can see result !';
            }
            else if (type == '2') {
                var html = 'Only voted user can see result!';
            }
            else {
                var html = 'Only owner can see result!';
            }
            $('#result_display_type_content').html(html).fadeIn();
        });
    });

    $('#result_detail_type').change(function() {
        var type = $(this).val();
        $('#result_detail_type_content').fadeOut(function() {
            if (type == '1') {
                var html = 'All result include who voted !';
            }
            else {
                var html = 'Show only percentage of each choice!';
            }
            $('#result_detail_type_content').html(html).fadeIn();
        });
    });

    $('#result_show_time_type').change(function() {
        var type = $(this).val();
        $('#result_show_time_type_content').fadeOut(function() {
            if (type == '0') {
                var html = 'Show result only after poll expired !';
            }
            else {
                var html = 'Show result during voting time !';
            }
            $('#result_show_time_type_content').html(html).fadeIn();
        });
    });

    var dateToday = new Date();
    var curHour = dateToday.getHours();
    var curMinute = dateToday.getMinutes();
    var curSecond = dateToday.getSeconds();
    
    var startDateTextBox = $('#start_at');
    var endDateTextBox = $('#end_at');

    startDateTextBox.datetimepicker({
        minDate: dateToday,
        dateFormat: "yy-mm-dd",
        timeFormat: "HH:mm:ss",
        hourMin: curHour,
        minuteMin: curMinute,
        secondMin: curSecond,
        onClose: function(dateText, inst) {
            if (endDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datetimepicker('getDate');
                var testEndDate = endDateTextBox.datetimepicker('getDate');
                if (testStartDate > testEndDate)
                    endDateTextBox.datetimepicker('setDate', testStartDate);
            }
            else {
                endDateTextBox.val(dateText);
            }
        },
        onSelect: function(selectedDateTime) {
          //  endDateTextBox.datetimepicker('option', 'minDate', startDateTextBox.datetimepicker('getDate'));
        }
    });
    endDateTextBox.datetimepicker({
        dateFormat: "yy-mm-dd",
        timeFormat: "HH:mm:ss",
        onClose: function(dateText, inst) {
            if (startDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datetimepicker('getDate');
                var testEndDate = endDateTextBox.datetimepicker('getDate');
                if (testStartDate > testEndDate)
                    startDateTextBox.datetimepicker('setDate', testEndDate);
            }
            else {
                startDateTextBox.val(dateText);
            }
        },
        onSelect: function(selectedDateTime) {
            startDateTextBox.datetimepicker('option', 'maxDate', endDateTextBox.datetimepicker('getDate'));
        }
    });
});
