<template>
  <div
    class="container mx-auto px-4 sm:px-16 xl:px-48 text-center lg:text-left"
  >
    <div class="collapse bg-base-200 mb-3">
      <input type="radio" name="my-accordion-1" checked="checked" />
      <div class="collapse-title text-xl font-medium">
        <p class="flex justify-between items-center">
          Instructions
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </p>
      </div>
      <div class="collapse-content">
        <p>Enter the 9-digit SIN number into the input field below.</p>
        <p>
          If the SIN is valid, the input field will display
          <span class="text-green-700">GREEN</span>.
        </p>
        <p>
          If the SIN is invalid, the input field will display
          <span class="text-red-700">RED</span>.
        </p>
        <p>Click the CLEAR button to clear the input fields.</p>
        <P
          >More details on SIN validation can be found
          <a
            href="https://loanscanada.ca/money/what-is-a-social-insurance-number-sin/"
            class="text-blue-700"
            >here</a
          >.</P
        >
      </div>
    </div>
    <div class="collapse bg-base-200 mb-3">
      <input type="radio" name="my-accordion-1" />
      <div class="collapse-title text-xl font-medium">
        <p class="flex justify-between items-center">
          Project Details
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </p>
      </div>
      <div class="collapse-content">
        <p>Edmond Lee</p>
        <p>https://github.com/eddstng/sinamon</p>
      </div>
    </div>
  </div>
</template>
