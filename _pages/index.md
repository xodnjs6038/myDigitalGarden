---
layout: page
title: Home
id: home
permalink: /
---

# Welcome! 🌱
안녕하세요! 옵시디언으로 제작된 디지털 정원(Digital Garden) 입니다.

고도화된 메모장을 사용하여 각 노트를 연결하고 확장시킬 수 있습니다.

옵시디언을 통한 개발 업무 활용법은 지속적으로 업데이트중에 있습니다.


<p style="padding: 3em 1em; background: #f5f7ff; border-radius: 4px;">
  기본적인 사용 방법은 여기에서 <span style="font-weight: bold">[[옵시디언 사용법]]</span>을 확인하고 시작해보세요.
</p>

여기 디지털 가든은 깃허브를 통해 관리되고 있습니다. [GitHub here](https://github.com/xodnjs6038/myDigitalGarden).

**Obsidian Tips**
<ul>
	<li>[[옵시디언 무료로 퍼블리시하는 방법]]</li>
</ul>

<strong>Recently updated notes</strong>

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d %hh:%mm" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>
