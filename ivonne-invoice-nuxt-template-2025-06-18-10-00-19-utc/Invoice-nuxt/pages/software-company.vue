

<script setup>
useHead({
  title: "Software Company",
})


import pdfUrl from "~/assets/img/invoice.pdf";

const downloadPdf = () => {
  // create element <a> for download PDF
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.target = '_blank';
  link.download = pdfUrl;

  // Simulate a click on the element <a>
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


</script>


<template>
  <div class="cs-container">
    <div class="cs-invoice cs-style1 tm-software">
      <div class="cs-invoice_in" id="download_section">
        <div class="flex-horizontal-center space-between cs-mb25 align-item-center cs-mb30 flex-wrap">
          <div class="cs-logo cs-mb5 tm-align-item-center space-between">
            <div class="tm-align-item-center">
              <img class="cs-mr10" src="~/assets/img/logo-2.svg" alt="Logo">
              <div class="tm-right-logo">
                <div>
                  <p class="cs-invoice_number cs-bold cs-primary_color cs-m0 cs-f20">IVONNE SOFTWARE</p>
                  <div class="display-flex">
                    <svg class=" cs-mr5" width="19" height="19" viewBox="0 0 19 19" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.2456 3.8999H14.4956V2.3999C14.4956 2.20099 14.4166 2.01022 14.2759 1.86957C14.1353 1.72892 13.9445 1.6499 13.7456 1.6499C13.5467 1.6499 13.3559 1.72892 13.2153 1.86957C13.0746 2.01022 12.9956 2.20099 12.9956 2.3999V3.8999H6.99561V2.3999C6.99561 2.20099 6.91659 2.01022 6.77594 1.86957C6.63528 1.72892 6.44452 1.6499 6.24561 1.6499C6.04669 1.6499 5.85593 1.72892 5.71528 1.86957C5.57462 2.01022 5.49561 2.20099 5.49561 2.3999V3.8999H4.74561C4.14887 3.8999 3.57657 4.13696 3.15462 4.55891C2.73266 4.98087 2.49561 5.55317 2.49561 6.1499V6.8999H17.4956V6.1499C17.4956 5.55317 17.2586 4.98087 16.8366 4.55891C16.4146 4.13696 15.8423 3.8999 15.2456 3.8999Z"
                        fill="#353535" />
                      <path
                        d="M2.49561 14.3999C2.49561 14.9966 2.73266 15.5689 3.15462 15.9909C3.57657 16.4129 4.14887 16.6499 4.74561 16.6499H15.2456C15.8423 16.6499 16.4146 16.4129 16.8366 15.9909C17.2586 15.5689 17.4956 14.9966 17.4956 14.3999V8.3999H2.49561V14.3999Z"
                        fill="#353535" />
                    </svg>
                    <p class="cs-mb0 cs-f14">
                      Issued Date: 31-09-2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="display-flex align-item-center">
            <button @click="downloadPdf" id="download_btn" class="cs-invoice_btn btn-blanck cs-primary_color">
              <svg class="cs-primary-color ionicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Download</title>
                <path d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40"
                  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                  d="M176 272l80 80 80-80M256 48v288" />
              </svg>
              <span>Download</span>
            </button>
            <div class="cs-m0 tm-align-item-center cs-invoice_btns tm-align-item-center cs-hide_print cs-p0">
              <a href="javascript:window.print()" class="cs-invoice_btn cs-p0">
                <svg class="cs-primary_color ionicon cs_primary_color" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path
                    d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24"
                    fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" />
                  <rect x="128" y="240" width="256" height="208" rx="24.32" ry="24.32" fill="none" stroke="currentColor"
                    stroke-linejoin="round" stroke-width="32" />
                  <path d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24" fill="none"
                    stroke="currentColor" stroke-linejoin="round" stroke-width="32" />
                  <circle cx="392" cy="184" r="24" />
                </svg>
                <span class="cs-primary_color">Print</span>
              </a>
            </div>
          </div>
        </div>
        <div class="display-flex cs-mb40 space-between">
          <div class="cs-invoice_left">
            <b class="cs-primary_color">CLIENT INFO:</b>
            <p>Jennifer Richards <br> 365 Bloor Street East, Toronto, <br> Ontario, M4W 3L4, Canada</p>
          </div>
          <div class="cs-invoice_right">
            <b class="cs-primary_color">INVOICE TO:</b>
            <p>
              237 Roanoke Road, North York, <br> Ontario, Canada <br> demo@email.com
            </p>
          </div>
        </div>
        <div class="cs-table cs-style2 tm-border-none cs-mb70 padding-rignt-left">
          <div class="tm-border-1px"></div>
          <div class="tm-border-none">
            <div class="cs-table_responsive tm-custom-td-padding">
              <table class="cs-mb30">
                <thead class="border-bottom-1 cs-mb50">
                  <tr class="cs-secondary_color">
                    <th class="cs-width_5 cs-normal">ITEMS</th>
                    <th class="cs-width_2 cs-normal">PRICE PER DAY</th>
                    <th class="cs-width_2 cs-normal">QTY, DAYS</th>
                    <th class="cs-width_2 cs-normal cs-text_right">TOTAL PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="cs-width_5 cs-primary_color cs-f15">
                      Task management app
                    </td>
                    <td class="cs-width_2 cs-primary_color cs-f15">$560.00</td>
                    <td class="cs-width_2 cs-primary_color cs-f15">7.0</td>
                    <td class="cs-width_2 cs-text_right cs-primary_color cs-f15">$560</td>
                  </tr>
                  <tr>
                    <td class="cs-width_5 cs-primary_color cs-f15">
                      Protoyping
                    </td>
                    <td class="cs-width_2 cs-primary_color">$860.00</td>
                    <td class="cs-width_2 cs-primary_color">19.5</td>
                    <td class="cs-width_2 cs-text_right cs-primary_color cs-f15">$860</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="display-flex space-between cs-mb50">
          <div>
            <p class="cs-primary_color cs-mb3 cs-semi_bold">BANK INFO:</p>
            <p class="cs-lh-165">
              Account Number: <span class="cs-primary_color cs-semi_bold">3752 4521 8465 45621</span> <br> Bank Name:
              <span class="cs-primary_color cs-semi_bold">Canadian Bank</span> <br> Account Holder: <span
                class="cs-primary_color cs-semi_bold">William Stark</span>
            </p>
          </div>
          <div>
            <p class="cs-secondary_color cs-text_right">Total</p>
            <p class="cs-primary_color cs-f18 cs-semi_bold cs-f28">$20,690.00</p>
          </div>
        </div>
        <div class="tm-border-1px cs-mb20"></div>
        <div class="display-flex space-between">
          <p>Thank You</p>
          <div class="display-flex">
            <p>demo@themehouse.com</p>
            <div class="cs-fuss"></div>
            <p>www.themehouse.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 