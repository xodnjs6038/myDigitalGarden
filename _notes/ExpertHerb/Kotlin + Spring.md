---
---

<img src="/assets/img/Language/kotlin_logo.png">
#### [[Kotlin]]이 개발 환경에서 많이 선택되는 이유

1. **간결한 문법**   
    Kotlin의 문법은 간결하고 직관적입니다. 이로 인해 코드는 더 짧고, 가독성이 좋으며, 유지 보수가 쉽습니다.
    - 예시
        
        Java에서는 다음과 같이 클래스를 선언하고 객체를 생성합니다:
        
        ```java
        public class Person {
            private String name;
            public Person(String name) {
                this.name = name;
            }
            public String getName() {
                return name;
            }
            public void setName(String name) {
                this.name = name;
            }
        }
        Person person = new Person("John");
        person.setName("Jane");
        
        ```
        
        반면 Kotlin에서는 더 간결하게 클래스를 선언하고 객체를 생성할 수 있습니다:
        
        ```kotlin
        data class Person (var name: String)
        val person = Person("John")
        person.name = "Jane"
        
        ```
        
2. **널 안전성**
    Kotlin은 NullPointerExeption에서 자유롭다는 것을 목표로 합니다.  
    이 언어에서는 모든 객체가 기본적으로 null이 될 수 없습니다. 이로 인해 'null' 관련 버그를 효과적으로 줄일 수 있습니다.  
    예를 들어, `var a: String? = null`과 같이 변수를 선언하면 `a`는 null을 가질 수 있습니다. 이 경우, `a.length` 대신 `a?.length`를 사용하여 안전하게 호출할 수 있습니다.
    
3. **자바와의 호환성**
    Kotlin은 완벽한 자바와의 호환성을 가지고 있습니다. 이는 기존의 자바 코드베이스를 Kotlin으로 점진적으로 바꿀 수 있음을 의미합니다.
    
4. **함수형 프로그래밍 및 객체 지향 프로그래밍 지원**  
    Kotlin은 **함수형 프로그래밍**과 **객체 지향 프로그래밍** 모두를 지원합니다. 이로 인해 개발자는 두 가지 접근법을 필요에 따라 혼합하거나 선택할 수 있습니다.
    
    
[[Kotlin 개발 가이드]]

##### PHP와 Kotlin의 주요 차이점

1. **사용 용도:** PHP는 주로 웹 서버 측 스크립팅에 사용되는 것에 반해, Kotlin은 범용 프로그래밍 언어로, 특히 Android 앱 개발에 주로 사용됩니다.
2. **타입 시스템:** PHP는 동적 타입 언어입니다. 즉, 변수의 타입은 실행 시간에 결정됩니다. 이는 프로그래밍에 유연성을 제공하지만, 런타임 오류를 초래할 가능성이 있습니다.   
   반면에 Kotlin은 정적 타입 언어로, 변수의 타입은 컴파일 시간에 확인됩니다. 이는 컴파일 타임에 오류를 잡아낼 수 있어 안전성을 높이는 장점이 있습니다.
3. **성능:** 일반적으로, Kotlin의 성능은 PHP보다 더 좋습니다. 이는 Kotlin이 JVM 위에서 실행되며, JVM이 최적화를 통해 높은 성능을 제공하기 때문입니다.
4. **오류 처리:** Kotlin은 컴파일 시간에 오류를 잡을 수 있는 강력한 타입 시스템을 가지고 있습니다. 반면에 PHP는 런타임 오류를 발생시킬 수 있는 느슨한 타입 시스템을 가지고 있습니다.
5. **프레임워크와 라이브러리:** PHP는 Laravel, Symfony, CodeIgniter 등 다양한 웹 개발 프레임워크를 제공합니다. 반면에 Kotlin은 Spring, Ktor 등의 프레임워크를 사용할 수 있습니다. 이들 프레임워크는 각각 다양한 기능을 제공하여 개발 프로세스를 단순화하고, 생산성을 향상시킵니다.

#### Spring 특징?

Spring은 가벼움과 과거 엔터프라이즈 자바 개발의 복잡성을 줄이는 데 중점을 둔 프레임워크입니다. POJO(Plain Old Java Object) 기반의 프로그래밍을 통해 테스트와 모듈성을 향상시키며, 풍부한 API를 제공하여 다양한 기술과의 통합을 용이하게 합니다. 또한, 선언적인 프로그래밍을 통해 관심사의 분리와 서비스 추상화를 제공합니다.

* Spring 프레임워크를 사용하지 않았을 때:

```java
public class EmployeeDAO {
    JdbcTemplate jdbcTemplate;

    public EmployeeDAO() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUrl("jdbc:postgresql://localhost/testdb");
        dataSource.setUsername("testuser");
        dataSource.setPassword("testpass");

        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    // ...
}

```

위의 코드 예시에서는 `EmployeeDAO` 클래스가 데이터 소스 구성을 직접 처리해야 합니다. 이로 인해 `EmployeeDAO`는 데이터 액세스 코드와 데이터 소스 구성 코드가 서로 혼재되어 있어, 코드의 복잡성이 증가하고, 유지 보수가 어렵습니다.

* Spring 프레임워크를 사용했을 때:  
```java
@Configuration
public class AppConfig {
    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUrl("jdbc:postgresql://localhost/testdb");
        dataSource.setUsername("testuser");
        dataSource.setPassword("testpass");

        return dataSource;
    }
}

@Repository
public class EmployeeDAO {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public EmployeeDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // ...
}

```

Spring 프레임워크를 사용하면, 데이터 소스 구성을 별도의 `AppConfig` 클래스에 위임할 수 있습니다. 이로 인해 `EmployeeDAO`는 데이터 액세스 코드에만 집중할 수 있어, 코드의 복잡성이 줄어들고, 유지 보수성이 향상됩니다.
