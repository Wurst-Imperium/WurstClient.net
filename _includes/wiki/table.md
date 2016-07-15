<table class="table border bordered hovered cell-hovered">
  {% for row in include.table %}
  {% if forloop.first %}
  <thead>
    <tr>
      {% for col in row %}
      <th class="no-padding-top no-padding-bottom">{{ col | markdownify }}</th>
      {% endfor %}
    </tr>
  </thead>
  <tbody>
    {% else %}
    <tr>
      {% for col in row %}
      <td class="no-padding-top no-padding-bottom">{{ col | markdownify }}</td>
      {% endfor %}
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>
