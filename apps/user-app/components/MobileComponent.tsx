export function MobileComponent() {
  return (
    <div className="w-[270px] text-[14px] bg-white  mb-4 rounded-3xl border-slate-50   border-[10px] min-h-[336px]">
      <div className="flex items-center  flex-col justify-center px-4 pb-0 pt-4">
        <ImageSvg />
        <div>Abstraction Magazine</div>
        <div className="text-slate-700">$19 per month</div>
        <button className="bg-black py-1 mt-6 w-full h-full text-white rounded-md">
          Pay
        </button>
        <div className=" text-slate-900">Or pay with card</div>
      </div>
      <div className="px-4  ">
        <div className="pb-1 text-slate-800">Email</div>
        <div className="border rounded-sm bg-transparent h-7" />
      </div>
      <div className="px-4 pt-2 ">
        <div className="pb-1 text-slate-800">Card Information</div>
        <div className="border px-2 rounded-sm bg-transparent h-7">Number</div>
      </div>
      <div className="px-4 pt-2 ">
        <div className="pb-1 text-slate-800">Country or Region</div>
        <div className="border rounded-sm px-2 bg-transparent ">
          United State
        </div>
      </div>
      <div className="px-4">
        <button className="bg-black py-1 my-3 w-full h-full text-white rounded-md">
          Pay
        </button>
      </div>
    </div>
  );
}

export const ImageSvg = () => (
  <svg
    width="72"
    height="91"
    viewBox="0 0 72 91"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M47.2675.5H3.25289C1.45637.5 0 1.95637 0 3.75289V69.9255c0 1.7965 1.45637 3.2529 3.25289 3.2529H47.2675c1.7965 0 3.2529-1.4564 3.2529-3.2529V3.75289C50.5204 1.95637 49.064.5 47.2675.5Z"
      fill="url(#homepage-abstraction-phone-path-a)"
    ></path>
    <path
      d="M50.5204 38.9151C31.3754 20.6207 16.6356 13.7735.45563 12.2929L0 12.2512v10.0435c13.8831 1.3733 27.2888 7.4539 46.9645 27.1295L50.5 52.9598l.0204-.0204V38.9151Z"
      fill="#FAB000"
    ></path>
    <path
      d="M12.5919 51.9737c3.5202 0 6.3738-2.8536 6.3738-6.3738s-2.8536-6.3738-6.3738-6.3738c-3.52017 0-6.37382 2.8536-6.37382 6.3738s2.85365 6.3738 6.37382 6.3738Z"
      fill="url(#homepage-abstraction-phone-path-b)"
    ></path>
    <path
      d="M6.32072 62.9735v4.6711h-.83274v-4.6711h.83274Zm.4923 4.0206.58552-.4685c.20168.3318.59203.553.98888.553.3318 0 .63757-.1171.63757-.4228 0-.2928-.28626-.3253-.82624-.4359-.53998-.1106-1.15803-.2473-1.15803-.9759 0-.6246.54649-1.08 1.33369-1.08.59853 0 1.13201.2668 1.37923.6441l-.52697.4749c-.19517-.3057-.52046-.4814-.8978-.4814-.31878 0-.52697.1431-.52697.3708 0 .2473.24722.2928.6766.3839.57902.1236 1.30767.2472 1.30767 1.0279 0 .6896-.63106 1.132-1.40525 1.132-.63107 0-1.26213-.2537-1.5679-.7221Zm3.21478 0 .5855-.4685c.2017.3318.5921.553.9889.553.3318 0 .6376-.1171.6376-.4228 0-.2928-.2863-.3253-.8263-.4359-.5399-.1106-1.158-.2473-1.158-.9759 0-.6246.5465-1.08 1.3337-1.08.5985 0 1.132.2668 1.3792.6441l-.5269.4749c-.1952-.3057-.5205-.4814-.8978-.4814-.3188 0-.527.1431-.527.3708 0 .2473.2472.2928.6766.3839.579.1236 1.3077.2472 1.3077 1.0279 0 .6896-.6311 1.132-1.4053 1.132-.6311 0-1.2621-.2537-1.5679-.7221Zm6.4156-2.765v3.4155h-.7807v-.3643c-.1951.2277-.4879.4359-.9303.4359-.7156 0-1.158-.4879-1.158-1.2231v-2.264h.7807v2.0949c0 .4163.1821.6831.605.6831.3513 0 .7026-.2603.7026-.7482v-2.0298h.7807Zm2.2672 3.4871c-.9759 0-1.659-.7221-1.659-1.7761 0-1.0019.6766-1.7761 1.6264-1.7761.9889 0 1.5159.7482 1.5159 1.685v.2603h-2.3942c.0586.5855.4099.9433.9109.9433.3838 0 .6896-.1952.7937-.5465l.6701.2537c-.2408.5986-.7807.9564-1.4638.9564Zm-.0391-2.8951c-.4033 0-.7156.2407-.8327.7026h1.5679c-.0065-.3773-.2407-.7026-.7352-.7026Zm3.26.488c0-1.4248.6766-2.4072 1.8347-2.4072 1.158 0 1.8346.9824 1.8346 2.4072 0 1.4247-.6766 2.4071-1.8346 2.4071-1.1581 0-1.8347-.9824-1.8347-2.4071Zm.8328 0c0 .9823.3122 1.685 1.0019 1.685.6896 0 1.0019-.7027 1.0019-1.685 0-.9824-.3123-1.685-1.0019-1.685-.6897 0-1.0019.7026-1.0019 1.685Zm3.2778 0c0-1.4248.6766-2.4072 1.8346-2.4072 1.1581 0 1.8347.9824 1.8347 2.4072 0 1.4247-.6766 2.4071-1.8347 2.4071-1.158 0-1.8346-.9824-1.8346-2.4071Zm.8328 0c0 .9823.3122 1.685 1.0018 1.685.6897 0 1.0019-.7027 1.0019-1.685 0-.9824-.3122-1.685-1.0019-1.685-.6896 0-1.0018.7026-1.0018 1.685Zm3.2338 1.6589 1.171-.9628c.6376-.5205 1.2101-.9824 1.2101-1.5679 0-.4815-.2993-.8263-.7937-.8263-.4879 0-.8067.3839-.8067.8458 0 .1496.026.2993.0781.4424h-.7742c-.0651-.1887-.0846-.3123-.0846-.4879 0-.8783.7221-1.5094 1.6069-1.5094.9759 0 1.6004.605 1.6004 1.4833 0 .8263-.6245 1.3923-1.2816 1.9127l-.7807.6181h2.1209v.7286h-3.2659v-.6766Z"
      fill="#fff"
    ></path>
    <g filter="url(#homepage-abstraction-phone-path-c)">
      <path
        d="M62.2166 9H18.7867c-1.958 0-3.5452 1.5873-3.5452 3.5453v65.5878c0 1.958 1.5872 3.5453 3.5452 3.5453h43.4299c1.958 0 3.5453-1.5873 3.5453-3.5453V12.5453c0-1.958-1.5873-3.5453-3.5453-3.5453Z"
        fill="#F6F9FC"
      ></path>
    </g>
    <path
      d="M40.5692 49.2909c-7.5153 0-13.6798 5.7842-14.2844 13.1436-.0538.6549.4841 1.1895 1.1412 1.1895h26.2865c.6571 0 1.195-.5346 1.1412-1.1895-.6046-7.3594-6.7691-13.1436-14.2845-13.1436Z"
      fill="#FAB000"
    ></path>
    <path
      d="M40.3331 33.5c-7.5154 0-13.6798 5.7842-14.2844 13.1436-.0538.6549.484 1.1895 1.1412 1.1895h26.2864c.6572 0 1.195-.5346 1.1412-1.1895C54.0129 39.2842 47.8485 33.5 40.3331 33.5Z"
      fill="#F6F9FC"
    ></path>
    <mask
      id="homepage-abstraction-phone-path-d"
      className="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="26"
      y="34"
      width="29"
      height="15"
    >
      <path
        d="M40.3331 34.5c-7.5154 0-13.6798 5.7842-14.2844 13.1436-.0538.6549.484 1.1895 1.1412 1.1895h26.2864c.6572 0 1.195-.5346 1.1412-1.1895C54.0129 40.2842 47.8485 34.5 40.3331 34.5Z"
        fill="#F6F9FC"
      ></path>
    </mask>
    <g mask="url(#homepage-abstraction-phone-path-d)">
      <g filter="url(#homepage-abstraction-phone-path-e)">
        <ellipse
          cx="33.498"
          cy="34.062"
          rx="11.4684"
          ry="11.6778"
          fill="#2C09F1"
        ></ellipse>
      </g>
      <g filter="url(#homepage-abstraction-phone-path-f)">
        <ellipse
          cx="33.5026"
          cy="49.3713"
          rx="9.09451"
          ry="9.29176"
          transform="rotate(-1.83252 33.5026 49.3713)"
          fill="#FAC300"
        ></ellipse>
      </g>
      <g filter="url(#homepage-abstraction-phone-path-g)">
        <ellipse
          cx="46.3983"
          cy="32.4332"
          rx="8.73365"
          ry="9.19056"
          fill="#FF4FD8"
        ></ellipse>
      </g>
    </g>
    <path
      d="M21.5647 15.8288h-.8327V20.5h.8327v-4.6712Zm.4923 4.0206c.3058.4684.9368.7222 1.5679.7222.7742 0 1.4052-.4424 1.4052-1.132 0-.7807-.7286-.9043-1.3076-1.028-.4294-.091-.6766-.1366-.6766-.3838 0-.2277.2082-.3708.5269-.3708.3774 0 .7027.1756.8978.4814l.527-.4749c-.2472-.3774-.7807-.6441-1.3792-.6441-.7872 0-1.3337.4554-1.3337 1.08 0 .7286.6181.8652 1.158.9758.54.1106.8263.1432.8263.4359 0 .3058-.3058.4229-.6376.4229-.3969 0-.7872-.2212-.9889-.553l-.5855.4684Zm3.2148 0c.3057.4684.9368.7222 1.5679.7222.7742 0 1.4052-.4424 1.4052-1.132 0-.7807-.7286-.9043-1.3076-1.028-.4294-.091-.6766-.1366-.6766-.3838 0-.2277.2081-.3708.5269-.3708.3774 0 .7026.1756.8978.4814l.527-.4749c-.2472-.3774-.7807-.6441-1.3792-.6441-.7872 0-1.3337.4554-1.3337 1.08 0 .7286.618.8652 1.158.9758.54.1106.8262.1432.8262.4359 0 .3058-.3057.4229-.6375.4229-.3969 0-.7872-.2212-.9889-.553l-.5855.4684Zm6.4156-2.7649h-.7807v2.0298c0 .4879-.3513.7481-.7026.7481-.4229 0-.6051-.2667-.6051-.6831v-2.0948h-.7807v2.264c0 .7351.4424 1.2231 1.1581 1.2231.4424 0 .7351-.2082.9303-.4359V20.5h.7807v-3.4155Zm2.2671 3.4871c.6831 0 1.2231-.3579 1.4638-.9564l-.6701-.2537c-.1041.3513-.4098.5465-.7937.5465-.5009 0-.8522-.3578-.9108-.9434h2.3941v-.2602c0-.9368-.5269-1.685-1.5158-1.685-.9499 0-1.6265.7742-1.6265 1.7761 0 1.0539.6831 1.7761 1.659 1.7761Zm-.039-2.8951c.4944 0 .7286.3253.7351.7026h-1.5679c.1171-.4619.4294-.7026.8328-.7026Zm3.26.4879c0 1.4248.6766 2.4072 1.8346 2.4072s1.8346-.9824 1.8346-2.4072c0-1.4247-.6766-2.4071-1.8346-2.4071s-1.8346.9824-1.8346 2.4071Zm.8327 0c0-.9824.3123-1.685 1.0019-1.685s1.0019.7026 1.0019 1.685-.3123 1.685-1.0019 1.685-1.0019-.7026-1.0019-1.685Zm3.2779 0c0 1.4248.6766 2.4072 1.8346 2.4072s1.8346-.9824 1.8346-2.4072c0-1.4247-.6766-2.4071-1.8346-2.4071s-1.8346.9824-1.8346 2.4071Zm.8327 0c0-.9824.3123-1.685 1.0019-1.685s1.0019.7026 1.0019 1.685-.3123 1.685-1.0019 1.685-1.0019-.7026-1.0019-1.685Zm4.4822-2.3681c-.0455.553-.2863.7547-.8718.8067l-.4554.0391v.618h1.1255V20.5h.8328v-4.7037h-.6311Z"
      fill="#4C555F"
    ></path>
    <defs>
      <filter
        id="homepage-abstraction-phone-path-c"
        x="9.0372"
        y="5.01155"
        width="62.9289"
        height="85.0869"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        ></feColorMatrix>
        <feOffset dy="1.32948"></feOffset>
        <feGaussianBlur stdDeviation="1.32948"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_990_4682"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        ></feColorMatrix>
        <feOffset dy="2.21581"></feOffset>
        <feGaussianBlur stdDeviation="3.10213"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0 0.364706 0 0 0 0.25 0"></feColorMatrix>
        <feBlend
          in2="effect1_dropShadow_990_4682"
          result="effect2_dropShadow_990_4682"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_990_4682"
          result="shape"
        ></feBlend>
      </filter>
      <filter
        id="homepage-abstraction-phone-path-e"
        x="11.567"
        y="11.9216"
        width="43.8619"
        height="44.2808"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          stdDeviation="5.23126"
          result="effect1_foregroundBlur_990_4682"
        ></feGaussianBlur>
      </filter>
      <filter
        id="homepage-abstraction-phone-path-f"
        x="13.9453"
        y="29.6172"
        width="39.1147"
        height="39.5083"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          stdDeviation="5.23126"
          result="effect1_foregroundBlur_990_4682"
        ></feGaussianBlur>
      </filter>
      <filter
        id="homepage-abstraction-phone-path-g"
        x="27.2718"
        y="12.8499"
        width="38.2528"
        height="39.1666"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          stdDeviation="5.19639"
          result="effect1_foregroundBlur_990_4682"
        ></feGaussianBlur>
      </filter>
      <radialGradient
        id="homepage-abstraction-phone-path-b"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(33.10171119 35.23199341 -676.24595427 635.35713152 -1.56642 27.6897)"
      >
        <stop stop-color="#2C09F1"></stop>
        <stop offset=".328125" stop-color="#ED8EF8"></stop>
        <stop offset=".578125" stop-color="#F7CE5D"></stop>
      </radialGradient>
      <linearGradient
        id="homepage-abstraction-phone-path-a"
        x1="47.861"
        y1="73.1784"
        x2="27.2626"
        y2="-18.3913"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#6237D5"></stop>
        <stop offset="1" stop-color="#E28CDF"></stop>
      </linearGradient>
    </defs>
  </svg>
);
