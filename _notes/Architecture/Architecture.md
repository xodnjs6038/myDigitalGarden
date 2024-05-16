---
_filters: []
_contexts: []
_links: []
_sort:
  field: rank
  asc: false
  group: false
---

아키텍처 패턴이란?

아키텍처 패턴이란 주어진 상황에서의 소프트웨어 아키텍처에서 일반적으로 발생하는 문제점들에 대한 일반화되고 재사용 가능한 솔루션이다. 아키텍처 패턴은 소프트웨어 디자인 패턴과 유사하지만 더 큰 범주에 속한다.

## 1. 계층화 패턴 (Layered pattern)
이 패턴은 n-티어 아키텍처 패턴이라고도 불린다. 이는 하위 모듈들의 그룹으로 나눌 수 있는 구조화된 프로그램에서 사용할 수 있다. 각 하위 모듈들은 특정한 수준의 추상화를 제공한다. 각 계층은 다음 상위 계층에 서비스를 제공한다.

일반적인 정보 시스템에서 공통적으로 볼 수 있는 계층 4가지는 다음과 같다.
- 프레젠테이션 계층 (Presentation layer) = UI 계층 (UI layer) 이라고도 함
- 애플리케이션 계층 (Application layer) = 서비스 계층 (Service layer) 이라고도 함
- 비즈니스 논리 계층 (Business logic layer) = 도메인 계층 (Domain layer) 이라고도 함
- 데이터 접근 계층 (Data access layer) = 영속 계층 (Persistence layer) 이라고도 함

활용
- 일반적인 데스크톱 애플리케이션
- E-commerce 웹 애플리케이션

## 2. 육각형 설계 (Hexagonal Architecture)
[[Hexagonal-architecture]]는 포트와 어댑터 설계라고도 한다.  

이러한 육각형 설계는 인터페이스나 기반 요소의 변경에 적게 영향을 받는 쪽으로 설계하는 것이 목표이다.

Hexagonal Architecture 가 전통적인 설계보다 좋은 점은, 인터페이스를 다중화하더라도 변경되는 코드가 거의 없으며, 많은 코드 공유를 통해서 재사용도 높일 수 있다.