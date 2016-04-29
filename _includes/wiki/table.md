<table class="table border bordered hovered cell-hovered">
  {% for row in include.table %}
  {% if forloop.first %}
  <thead>
    <tr>
      {% for col in row %}
      <th>{{ col }}</th>
      {% endfor %}
    </tr>
  </thead>
  <tbody>
    {% else %}
    <tr>
      {% for col in row %}
      <td>{{ col }}</td>
      {% endfor %}
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>
