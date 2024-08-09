자바의 Linked List는 ArrayList와 같이 인덱스로 접근하여 조회 / 삽입이 가능하지만 내부 구조는 완전히 다르게 구성되어 있다는 점이 특징이다. ArrayList는 내부적으로 배열을 이용하여 메서드로 이리저리 조작이 가능하게 만든 컬렉션이라면, Linked List는 노드(객체) 끼리의 주소 포인터를 서로 가리키며 링크(참조) 함으로써 이어지는 구조이다.
[![jcf-linkedlist](https://blog.kakaocdn.net/dn/bkxHdO/btrQEHXJbyj/btRCV8Frqi0GUJhFNOWSoK/img.png)](https://blog.kakaocdn.net/dn/bkxHdO/btrQEHXJbyj/btRCV8Frqi0GUJhFNOWSoK/img.png)
위 그림을 보면 LinkedList는 각기 노드마다 화살표로 연결되어 리스트 형태로 나열되어 있는 것을 볼 수 있다. 여기서 노드는 하나의 객체라고 보면된다,. 즉, 객체를 만들면 객체의 주소가 생기게되는데, 노드마다 각기 객체의 주소를 서로 참조함으로서 연결 형태를 구성하는 것이다.

단일 노드를 그림과 코드로 표현한다면 다음과 같이 될 것이다.
[![jcf-linkedlist](https://blog.kakaocdn.net/dn/coWzBA/btrQE4ZBOoM/LaFN5iNjuGXyfhtFPKAYH0/img.png)](https://blog.kakaocdn.net/dn/coWzBA/btrQE4ZBOoM/LaFN5iNjuGXyfhtFPKAYH0/img.png)

java

```
class Node {
    Node next; // 다음 노드 주소를 저장하는 필드
    int data; // 데이터를 저장하는 필드
};
```

출처: [https://inpa.tistory.com/entry/JAVA-☕-LinkedList-구조-사용법-완벽-정복하기](https://inpa.tistory.com/entry/JAVA-%E2%98%95-LinkedList-%EA%B5%AC%EC%A1%B0-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%B3%B5%ED%95%98%EA%B8%B0) [Inpa Dev 👨‍💻:티스토리]