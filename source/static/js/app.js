
// accordion custom callback
$(document).on('click.fndtn.accordion', '[data-accordion] > dd > a', function (e){
    var active_class = 'active';
    
    var target = $(e.target);
    var siblings = $('> dd > a', $(e.target).closest('[data-accordion]'));
    var active = $('> dd > a.active', $(e.target).closest('[data-accordion]'));
    
    if( target[0] == active[0] ){
        target.toggleClass(active_class);
    } else {
        siblings.removeClass(active_class);
        target.addClass(active_class);
    }
});