// 로그인 유저의 토큰을 반환하는 함수
export const getToken = () => localStorage.getItem('ACCESS_TOKEN');


// 로그인 유저의 이름을 반환하는 함수
export const getUsername = () => localStorage.getItem('LOGIN_USERNAME');

// 로그인 상태인지 검증해주는 함수
export const isLogin = () => !!getUsername();