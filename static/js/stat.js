$(function(){
    $.get('/api/flowstat/index.php?width='+screen.width
            +'&height='+screen.height
            +'&ref='+escape(document.referrer)
            +'&url='+escape(document.URL)
            +'&page='+document.getElementById('stat_js').getAttribute('page')
            +'&params='+document.getElementById('stat_js').getAttribute('params')
            +'&siteid='+document.getElementById('stat_js').getAttribute('siteid'));
})