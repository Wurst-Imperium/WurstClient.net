## Media
{% for media in page.media %}
  <figure class="thumbnail">
    {% if media[0] contains "https://www.youtube.com/watch?v=" %}
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/{{ media[0] | remove: "https://www.youtube.com/watch?v=" }}" allowfullscreen></iframe>
      </div>
    {% elsif media[0] contains "https://cloud.githubusercontent.com/assets/" %}
    <a href="{{ media[0] }}" target="_blank">
      <img src="{{ media[0] }}"{% if media[1] %} alt="{{ media[1] }}"{% endif %}>
    </a>
    {% else %}
      <div class="alert alert-danger">
        <strong>Error:</strong> Unknown media!
      </div>
    {% endif %}
    {% if media[1] %}
      <figcaption class="caption">
        {{ media[1] | markdownify }}
      </figcaption>
    {% endif %}
  </figure>
{% endfor %}
