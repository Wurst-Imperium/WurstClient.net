## Media
{% for media in page.media %}
  <figure class="margin20 no-margin-left no-margin-right no-margin-top padding10 shadow">
    {% if media[0] contains "https://www.youtube.com/watch?v=" %}
      {% assign video-id = media[0] | remove: "https://www.youtube.com/watch?v=" %}
      {% include video.html id = video-id onclick = "ga('send', 'event', 'wiki', 'watch video');" %}
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
      <figcaption>
        {{ media[1] | markdownify }}
      </figcaption>
    {% endif %}
  </figure>
{% endfor %}
