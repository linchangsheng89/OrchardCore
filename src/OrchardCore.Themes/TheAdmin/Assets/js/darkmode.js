$("#btn-darkmode").click(function() {
    if($('#admin-darkmode').attr('media') == 'all')
    {
        $('#admin-default').attr('media', 'all');
        $('#admin-darkmode').attr('media', 'not all');
        $(this).children(':first').addClass('fa-moon');
        darkmode = false;
    }
    else
    {
        $('#admin-default').attr('media', 'not all');
        $('#admin-darkmode').attr('media', 'all');
        $(this).children(':first').addClass('fa-sun');
        darkmode = true;
    }

    persistAdminPreferences();
});
