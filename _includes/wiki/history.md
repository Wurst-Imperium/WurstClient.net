## History
<table class="table border bordered hovered cell-hovered">
  <thead>
    <tr>
      <th>Version</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  {% for row in page.history %}
    <tr>
      <td>{{ row[0] }}</td>
      <td>{{ row[1] }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
