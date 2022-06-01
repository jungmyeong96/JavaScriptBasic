//Callback Hell example

'use strict'; //선언하면 여러 에러방지가능

class UserStorage {
    loginUser(id, password, onSuccess, onError) // 사용자 데이터를 통해 성공 혹은 에러
    {
        setTimeout(() => {
             if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
             ) {
                 onSuccess(id);
             } else {
                 onError(new Error('not found'));
             }
        }, 2000);
    } // 백엔드가 없기에 서버랑 통신하는 느낌으로 딜레이를 대신 줌

    getRoles(user, onSuccess, onError) //원래는 로그인시 한번에 모든 정보를 받아오는게 좋은 서버 하지만 이것 임시 예시이기때문에 역할을 받는 API구성
    {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passwd');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);

//클래스 UserStorage의 객체인 userStorage생성 후, loginUser메소드실행 파라미터로 id/pw와 콜백함수 success와 error전달
//콜백 success는 loginUser내부에서 id를 전달 받고 getRoles 메소드를 호출
//getRole메소드는 id와 콜백 success인 userWithRole과 Error를 전달 받고 
//콜백 success는 getRole내부에서 role객체를 전달받고 alert를 실행