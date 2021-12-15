      // 클래스 명은 맘대로 작명
      class CustomInput extends HTMLElement {
        connectedCallback() {
            // 안에 묶을 HTML 작성
            let islabel = document.createElement('label');
            islabel.innerHTML = "텍스트 출력";
            this.appendChild(islabel);
            let isinput = document.createElement('input');
            this.appendChild(isinput);

            // <style>태그도 넣어서 스타일 집어넣기가 가능
            // let isinput2 = document.createElement('style');
            // this.appendChild(isinput2);
        }
    }

    customElements.define('label-input', CustomInput)