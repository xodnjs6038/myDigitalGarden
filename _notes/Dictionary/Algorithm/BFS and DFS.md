아래 코드 예시는 [[단어 변환 문제]]를 참고.

1. BFS (Breadth-First Search, 너비 우선 탐색)

	**큐 사용**:
	- 큐를 사용하여 탐색을 수행합니다. 큐에는 현재 단어와 변환 단계 수를 함께 저장합니다.
	- 현재 단어와 단계 수를 큐에서 꺼내어 처리하고, 다음 단계로 넘어갈 때는 새 단어와 단계 수를 큐에 추가합니다.
	``` JAVA
	Queue<Node> queue = new LinkedList<>();
	queue.add(new Node(currentWord, currentStep));
	while (!queue.isEmpty()){ 
		Node node = queue.poll(); // 처리 코드 
	}
	```

	**방문 기록**:
	- 방문 기록 배열을 사용하여 이미 방문한 단어를 체크합니다. 이는 중복된 탐색을 방지하고, 효율적으로 탐색할 수 있도록 도와줍니다.
	- 방문한 단어는 큐에 다시 추가되지 않도록 합니다.  
    
	``` JAVA
	boolean[] visited = new boolean[words.length];
	   if (!visited[i]) {
	    visited[i] = true;
		queue.add(new Node(nextWord, currentStep + 1));
	   }
 ```

	**변환 가능성 검사**:
    - 두 단어가 한 글자만 다른지 검사하여 변환이 가능한지 확인합니다.
    - 변환 가능하면 큐에 새 단어와 단계 수를 추가합니다.

	``` JAVA
	int diffCount = 0;
	for (int i = 0; i < word1.length(); i++) {
	    if (word1.charAt(i) != word2.charAt(i)) {
	        diffCount++;
	        if (diffCount > 1) return false;
	    }
	}
	return diffCount == 1;
	```

2. DFS (Depth-First Search, 깊이 우선 탐색
	 **재귀적 탐색**:
    - 깊이 우선 탐색을 위해 재귀적으로 단어를 탐색합니다.
    - 현재 단어가 목표 단어와 같으면 변환 단계를 기록합니다. 이 단계는 DFS의 깊이에 따라 달라질 수 있습니다.
	 **방문 기록**:
    - 방문 기록 배열을 사용하여 현재 탐색 중인 단어를 기록하고, 탐색 후에는 상태를 원상복구합니다. 이로 인해 동일 단어를 여러 번 방문하지 않도록 합니다.
	 **변환 가능성 검사**:
    - 두 단어가 한 글자만 다른지 검사하여 변환이 가능한지 확인합니다.
    - 가능한 변환을 수행하고, 재귀적으로 탐색을 계속합니다.