
(function() {

  function expand(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*(.+?)\*/g, '<i>$1</i>')
  }

  function emit($item, item) {
    if (!$("link[href='/plugins/metadata/metadata.css']").length) {
      $('<link rel="stylesheet" href="/plugins/metadata/metadata.css" type="text/css">').appendTo("head");
    }

    const metadata = item.metadata || {};
    const content = Object.keys(metadata).map((key) => {
      const value = JSON.stringify(metadata[key]);
      return `<dl><dt>${key}</dt><dd>${value}</dd></dl>`;
    }).join(`\n`);

    return $item.append(content)
  }

  function handlePresave(item, value) {
    item.metadata = JSON.parse(value);
    return value;
  }

  function bind($item, item) {
    return $item.dblclick(() => {
      return wiki.textEditor($item, item, { presave: handlePresave });
    })
  }

  if (typeof window !== "undefined" && window !== null) {
    window.plugins.metadata = {emit, bind}
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports = {expand}
  }

}).call(this)
