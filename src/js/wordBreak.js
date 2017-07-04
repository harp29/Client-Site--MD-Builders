//break each word up into chars
//1) get the text, 2) make it uppercase, 3) split text "", 4) sort (placing all into an array  of strings each char seperated)
//5) loop through and print each char, 6)
const wordBreak=(element)=>{

    const lineBreak = $('<br>');

    const textBlock = element.text();
    element.empty();

    const tcSplit = textBlock.split("");
    const tcSort = tcSplit.sort();

    for (let i = 0; i < textBlock.length; i++) {
      const char = textBlock.split("")[i];

      var charDiv = $('<span>').append(char);
      charDiv.attr('id', i)
      charDiv.css({
          opacity:'0'
      });

      element.css({
        opacity: '1',
        visibility: 'visible'
      }).addClass('chared-word-break');

      //Letter spacing for spans:
        // $('#18').addClass('letter-spacing-large');
        // $('#21').addClass('letter-spacing-large');
        // $('#29').addClass('letter-spacing-large');
        // $('#38').addClass('letter-spacing-large');
        // $('#70').addClass('letter-spacing-large');
        // $('#74').addClass('letter-spacing-small');
        // $('#77').addClass('letter-spacing-medium');
        // $('#80').addClass('letter-spacing-small');

      element.append(charDiv);

      charDiv.delay(tcSort.indexOf(char) * 30).animate({
          opacity:'1'
      },1200);


    };
    return element;
};
