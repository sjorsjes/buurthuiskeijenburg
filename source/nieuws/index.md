---
layout: nieuws

eleventyNavigation:
    order: 1
    key: Nieuws

pagination:
  data: collections.news
  reverse: true
  size: 2

permalink: /nieuws/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber }}/{% endif %}index.html

---