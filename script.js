/*<p>made by <a href="https://codepen.io/juliepark"> julie</a> ♡ active button class onclick*/
$('nav a').click(function(e) {
  e.preventDefault();
  $('nav a').removeClass('active');
  $(this).addClass('active');
  if(this.id === !'payment'){
    $('.payment').addClass('noshow');
  }
  else if(this.id === 'payment') {
    $('.payment').removeClass('noshow');
    $('.rightbox').children().not('.payment').addClass('noshow');
  }
  else if (this.id === 'profile') {
    $('.profile').removeClass('noshow');
     $('.rightbox').children().not('.profile').addClass('noshow');
  }
  else if(this.id === 'subscription') {
    $('.subscription').removeClass('noshow');
    $('.rightbox').children().not('.subscription').addClass('noshow');
  }
    else if(this.id === 'privacy') {
    $('.privacy').removeClass('noshow');
    $('.rightbox').children().not('.privacy').addClass('noshow');
  }
  else if(this.id === 'settings') {
    $('.settings').removeClass('noshow');
    $('.rightbox').children().not('.settings').addClass('noshow');
  }
    else if(this.id === 'estate') {
    $('.estate').removeClass('noshow');
    $('.rightbox').children().not('.estate').addClass('noshow');
  }
});