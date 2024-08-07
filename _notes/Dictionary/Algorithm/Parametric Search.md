파라매트릭 서치 : 문제를 결정문제로 변형하여 이분 탐색을 통해 해결하는 방법론

### 적용 조건
- **특정 조건을 만족하는 최댓값/최솟값을 구하는 형식의 문제여야 한다.** 혹은 이러한 형태로 변형이 가능해야 한다. 예를 들어 위의 고기의 경우에도, “200g이하의 고기 중 최댓값을 구하여라”라는 문제로 생각할 수 있다.
- **최댓값을 구하는 문제의 경우 어떤 값이 조건을 만족하면 그 값보다 작은 값은 모두 조건을 만족해야 한다.(최솟값의 경우 그 값보다 큰 값은 모두 조건을 만족해야 한다.)** 그래야 조건을 만족하는 경우 더 큰 값을, 만족하지 않는 경우 더 작은 값을 확인하면서 이분탐색을 통해 답을 구할 수 있다.
- **답의 범위가 이산적이거나(e.g. 정수) 허용 오차 범위가 있어야 한다.** 이분탐색으로는 연속적인 범위에서 정답에 한없이 가까워질 수는 있지만 완전히 정확한 값은 구할 수 없기 때문에다.

### 구현
 어떤 조건 `condition(x)`를 만족하는 최댓값을 찾는 문제를 풀어야 하고, 답은 정수라고 하자. 이 조건에 맞는 값을 구하기 위해 답의 후보의 범위를 컨트롤한다. 즉, 후보 범위의 최솟값인 `ll`과 최댓값 `hh`을 넉넉하게 잡아준 뒤 이를 점점 줄여나가면서 최종적으로 `ll`과 `hh`가 같아지도록 하는 것이 목표이다.
 
이분탐색을 해야 하므로 지금 범위에서 조건을 확인할 이 범위의 중간값을 `mm`이라 하자.

```
m = (l + h + 1) / 2;

if( condition(m) ) {
    ...
} else {
    ...
}
```

여기서 중간값을 일반적으로 쓰는 절반인 `(l+h)/2(l+h)/2`이 아니라 `(l+h+1)/2(l+h+1)/2`로 했는데, 이에 대해서는 뒤에서 설명하고 일단 넘어가자.

`mm`에 대해 조건이 만족했을 경우 답의 후보 범위를 `m∼hm∼h`로 조정하면 된다. 만약에 만족하지 못했을 경우 답의 후보 범위를 `l∼(m−1)l∼(m−1)`로 조정해야 한다.

`mm`에 대해 조건이 만족했을 경우 답의 후보 범위를 `m∼hm∼h`로 조정하면 된다. 만약에 만족하지 못했을 경우 답의 후보 범위를 `l∼(m−1)l∼(m−1)`로 조정해야 한다.

```
m = (l + h + 1) / 2;

if( condition(m) ) {
    l = m;
} else {
    h = m - 1;
}
```

![](https://ialy1595.github.io/images/parametric_search/cond0.png#center75)

이제 이 이분탐색을 `ll`과 `hh`가 같아질 때까지 하면 된다.

```
while(l < h) {
    m = (l + h + 1) / 2;

    if( condition(m) ) {
        l = m;
    } else {
        h = m - 1;
    }
}
```

여기서 주의해야할 점은 마지막에 무한루프에 빠지지 않는지 확인해야 한다는 것인데, 이를 위해서 중간값을 `(l+h)/2(l+h)/2`이 아니라 `(l+h+1)/2(l+h+1)/2`로 해줬다. 이 둘의 차이는 `l+hl+h`이 홀수여서 반으로 나누면 `0.50.5`가 남는 경우, 버림을 해줄 지 올림을 해줄 지에 대한 것이다. 현재 다루고 있는 범위가 어느정도 클 경우에는 큰 문제가 되지 않는다. 하지만 이 범위가 좁을 때, 특히 `ll`과 `hh`이 `11`차이로 붙어있을 때 잘못하면 무한루프에 빠질 수 있다.

무한루프에 빠지지 않게 하려면 이분탐색에 의해 위의 그림처럼 두 구역으로 나눠졌을 때 `mm`이 어디에 속하는지를 확인하면 된다. 예를 들어 위와 같이 조건에 만족하는 최댓값을 구해야 하는 경우 `mm`은 `hh`쪽 범위에 속하게 된다. `ll`과 `hh`이 `11`차이로 붙어있을 때 `m=(l+h)/2m=(l+h)/2`일 경우에는 `m=lm=l`가 되고 `m=(l+h+1)/2m=(l+h+1)/2`일 경우에는 `m=hm=h`가 되는데 이 때 변화할 범위 그림을 그려보면 아래와 같다.

![](https://ialy1595.github.io/images/parametric_search/cond1.png#center75)

이처럼 `m=(l+h)/2m=(l+h)/2`로 할 경우 조건은 항상 만족해야만 하면서 루프를 진행하는 과정에서 범위가 변화하지 않으므로 무한루프에 빠지게 된다. 따라서 조건에 만족하는 최댓값을 구해야 하는 경우에는 `m=(l+h+1)/2m=(l+h+1)/2`로 잡아줘야 무한루프에 빠지지 않게 된다.

반대로 조건에 만족하는 최솟값을 구하는 경우에는 조건을 만족했을 땐 범위가 `l∼ml∼m`, 만족하지 않았을 땐 `(m+1)∼h(m+1)∼h`로 바뀌면서 `mm`이 `ll`쪽에 속하게 된다. 따라서 이 경우에는 `m=(l+h)/2m=(l+h)/2`로 해줘야 무한루프에 빠지지 않을 수 있다.

### 시간복잡도

사실 이 알고리즘의 시간복잡도는 이 알고리즘 자체 보다는 조건 함수가 얼마나 빠른지에 달려있다. 우선 `while`에서 한 번씩 루프를 돌 때마다 범위가 절반씩 줄어들게 된다. 따라서 맨 처음에 넉넉하게 잡은 범위를 `MM`이라고 하면 루프는 `logMlog⁡M`번 실행된다. 즉, 조건 함수가 한번 실행될 때 걸리는 시간복잡도를 `O(C(n))O(C(n))`이라 하면 총 시간복잡도는 `O(C(n)logM)O(C(n)log⁡M)`이 된다.

### 적용

이 알고리즘은 알고리즘 자체 보다는 문제를 어떻게 해석해서 이 알고리즘을 적용시켜야 하는지가 더 어려운 알고리즘이다. 이해를 돕기 위해 백준에 있는 [중량제한](https://www.acmicpc.net/problem/1939)이라는 문제를 풀어보자.

문제를 간략하게 설명하자면, 섬과 다리가 그래프처럼 이루어져 있는 나라가 있는데, 이 중 두 섬에는 공장이 있다. 그리고 각 다리에는 그 다리가 버틸 수 있는 최대 하중이 있다. 이 때 두 공장 사이를 왔다갔다 할 수 있는 무게의 최댓값을 구해야 한다. 섬의 갯수 `NN`은 `10,00010,000`이하, 다리의 갯수 `MM`은 `100,000100,000`이하, 다리가 버틸 수 있는 최대 하중은 `1∼1,000,000,0001∼1,000,000,000`이다.

이 문제를 그냥 풀려면 두 공장 사이의 경로 중 그 경로에 포함된 다리가 버틸 수 있는 최대 하중의 최솟값이 가장 큰 경로를 찾아야 한다. 딱 봐도 뭔가 복잡해보인다. 그러나 이를 파라매트릭 서치를 사용하면 문제를 쉽게 바꿀 수 있다.

우선 문제를 **특정 조건을 만족하는 최댓값/최솟값을 구하는 형식의 문제**로 바꿔보자. 사실 어렵게 바꿀 필요도 없이 문제에서 이미 두 공장 사이를 왔다갔다 할 수 있는 무게의 최댓값을 구하라고 하긴 했다. 이를 수학적으로 조금만 더 정리하자면, 어떤 무게 `xx`에 대해 `xx`의 무게를 견딜 수 있는 다리로만 섬들을 연결했을 때 두 공장이 있는 섬이 연결되는 `xx` 중 최댓값을 찾으면 된다.

여기서 우리가 만들어야 하는 조건함수는 어떤 무게 `xx`에 대해 `xx`의 무게를 견딜 수 있는 다리로만 섬들을 연결했을 때 두 공장이 있는 섬이 연결되는지를 판별하면 된다. 이는 주어진 그래프에서 두 공장 중 아무거나 하나를 기준으로 삼아서 버틸 수 있는 하중이 `xx`이상인 간선들만 DFS로 탐색하면서 나머지 한 공장이 나오는지 확인하는 방법으로 풀면 `O(M)O(M)` 안에 해결할 수 있다.

이제 `ll`과 `hh`의 초기값만 정해주면 된다. 정말 넉넉하게 잡아주려면 그냥 문제 조건에서 나온 `11`과 `1,000,000,0001,000,000,000`로 해도 되고, 좀 더 최적화 하자면 입력된 간선이 버틸 수 있는 하중들의 최솟값과 최댓값으로 해도 된다. 정말로 더 최적화를 하고 싶다면 입력받은 하중 제한들을 정렬해서 배열에 저장한 후, 그 인덱스로 처리하면 범위를 정확히 `NN`으로 줄일 수 있다. 사실 범위가 로그 스케일로 감속하기 때문에 엄청 큰 차이는 나지 않는다.

조건 함수의 시간복잡도가 DFS이므로 간선 갯수인 `O(M)O(M)`, 범위는 최적화를 할 경우 `NN`이므로 총 시간복잡도는 `O(MlogN)O(Mlog⁡N)`이다. 혹은 범위를 최적화를 하지 않아도 `O(Mlog(1,000,000,000))O(Mlog⁡(1,000,000,000))`으로 충분히 시간 안에 통과할 수 있다.