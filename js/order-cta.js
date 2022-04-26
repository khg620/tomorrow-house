const orderCta = document.querySelector('.order-cta')
//const orderCtaBookmarkButton = orderCta.children[0]
//const orderCtaBuyButton = orderCta.children[1]
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderModalOverlay.addEventListener('click', closeOrderModal)

function toggleOrderCtaBookmark() {
  // 1. 버튼 is-active 클래스
  // 2. icon 클래스 변경 => ic-bookmark-filled
  // 3. 카운트 숫자 값을 변경
  // ★ 두 가지 경우 번갈아 변경 : toggle

  const [icon, countSpan] = this.children
  // ★ 천단위 구분단위 들어간 string을 number로 바꾸기
  // 구분단위를 제거 => number로 변환
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))

  let newCount = count
  if (this.classList.contains('is-active')) {
    // NOTE: 활성화된 상태이니 -> 비활성화 (ic-bookmark), -1
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
  } else {
    // NOTE: 비활성화된 상태이니 -> 활성화, +1(ic-bookmark-filled)
    icon.classList.remove('ic-bookmark')
    icon.classList.add('ic-bookmark-filled')
    newCount = newCount + 1
  }

  //★ setAttribute()
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`) //★ template literal : 변수를 넣을 수 있다
  countSpan.innerHTML = newCount.toLocaleString()
  // ★ 자릿수 표현 toLocaleString()
  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)
