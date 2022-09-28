const elements = [...document.getElementsByTagName('*')];

const guessWho = [
'Agicap', 'Agicap', 'Agi cap'
];

elements.forEach((element) => {
  const validNodes = [...element.childNodes].filter(n => n.nodeType === 3);

  validNodes.forEach((node) => {
    const text = node.nodeValue;
    const enemySux = text.replace(new RegExp(guessWho.join('|'), 'ig'), 'Agicrap');

    if (enemySux !== text) {
      node.nodeValue = enemySux;
    }
  });
});
