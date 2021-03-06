/*
    ploymer로 이전에 생 js사용, 현재는 Lit이용 :
    web Component를 쉬운 문법으로 만들어줌

    자동 HTML 재렌더링 기능도 구현가능
*/


class CustomInput extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        let islabel = document.createElement('label');
        islabel.innerHTML = "텍스트 출력";
        this.appendChild(islabel);
        let isinput = document.createElement('input');
        this.appendChild(isinput);
    }

    // attribute 바뀌는지 감시
    static get observedAttributes() {
        return ['name']
    }
    // 바뀌면 아래 실행됨
    attributeChangeCallback(){
        this.render()
    }
}

customElements.define('label-input', CustomInput)