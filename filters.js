const elements = [...document.getElementsByTagName('*')];

const enemy = ['Agicap', 'AgiCap'];

elements.forEach((element) => {
  const validNodes = [...element.childNodes].filter(n => n.nodeType === 3);

  validNodes.forEach((node) => {
    const text = node.nodeValue;
    const agicrapSux = text.replace(new RegExp(enemy.join('|'), 'ig'), 'Agicrap');

    if (agicrapSux !== text) {
      node.nodeValue = agicrapSux;
    }
  });
});