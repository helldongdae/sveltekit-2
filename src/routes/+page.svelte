<script>
  import IntroItem from "../component/IntroItem.svelte";
  import Map from "../component/Map.svelte";
  import Logo from "../public/assets/logo-trans.png";
</script>

<style>
  .bella-main-page {
    background: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
    height: 88vh;
  }

  .main-page-desc {
    font-family: "Playfair Display", serif;
    font-weight: 600;
  }
</style>

<main>
  <div
    class="bella-main-page w-full realtive flex flex-col items-center justify-center mb-8"
  >
    <div class="z-10 mt-48">
      <div class="text-4xl text-white">아름다움과 자신감</div>
      <div class="text-md text-white main-page-des text-center">
        Find the true beauty in yourself
      </div>
    </div>
    <br />
    <div class="absolute justify-center items-center bottom-20">
      <div
        class="w-20 h-20 rounded-full border-2 border-purple-500 flex justify-center items-center animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
    <img src="{Logo}" alt="logo" class="absolute top-36" />
  </div>
  <div class="mb-8">
    <div class="flex justify-center items-center text-3xl font-bold mb-8">
      Diet Program
    </div>
    <div class="flex justify-center items-center text-xl mb-8">
      건강한 시작, 새로운 나를 위해
    </div>
    <IntroItem
      title="10일의 기적"
      description="10일 간 이루어지는 체계적인 관리와 균형잡힌 식단 및 운동으로 원하는 몸에 다가가세요"
      image="https://src.hidoc.co.kr/image/lib/2022/2/16/1644995225813_0.jpg"
    />
    <IntroItem
      title="식단 프로그램"
      description="전문가가 직접 디자인 한 식단을 통해, 굶지 않고 건강한 다이어트를 하세요"
      image="https://post-phinf.pstatic.net/MjAyMDAxMTBfMjYg/MDAxNTc4NjMzNDk4NDk1.fKcllYRGmg-oJMngeBuGkgGubLCPRKEuKeJ2LPdgg0sg.Z5SxUr8TLb_3RWYX5wyBttCAj8fKlm9Ea6_O6nhAAGkg.JPEG/tip101t030324.jpg?type=w1200"
    />
  </div>
  <div class="mb-8">
    <div class="flex justify-center items-center text-3xl font-bold mb-8">
      Special Care Program
    </div>
    <div class="flex text-center justify-center items-center text-xl mb-8">
      바디 디자인만의 <br />특별한 관리 프로그램을 경험해보세요
    </div>
    <IntroItem
      title="집중 얼굴 관리"
      description="전문적인 관리를 통해, 작고 갸름한 얼굴을 만들 수 있습니다"
      image="https://media.allure.com/photos/5947fcdf6e33594840f9ead8/16:9/w_2560%2Cc_limit/touching-face.jpg"
    />
    <IntroItem
      title="운동 프로그램"
      description="벨라가 직접 디자인한 운동 프로그램으로, 재미있고 효율적으로 운동 할 수 있습니다"
      image="https://www.korea.kr/newsWeb/resources/temp/images/000012/%EC%9A%B4%EB%8F%99_%EB%B3%B8%EB%AC%B8.jpg"
    />
  </div>
  <div class="mb-8 px-5">
    <div class="flex justify-center items-center text-3xl font-bold mb-8">
      상담 신청
    </div>
    <div class="flex justify-center items-center text-md font-bold mb-8">
      010-1234-5678
    </div>
  </div>
  <div class="mb-8 px-5">
    <div class="flex justify-center items-center text-3xl font-bold mb-8">
      오시는 길
    </div>
    <div class="flex justify-center items-center text-md font-bold mb-8">
      서울특별시 서초구 강남대로 463 리젠타워 15층
    </div>
    <Map />
  </div>
</main>
