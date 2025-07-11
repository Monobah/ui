
<script setup>
useHead({
  title: "Subscription",
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
  <div class="cs-container tm-saas">
    <div class="cs-invoice cs-style1">
      <div class="cs-invoice_in" id="download_section">
        <div class="flex-horizontal-center space-between align-item-center cs-mb30 flex-wrap">
          <div class="cs-logo cs-mb5 tm-align-item-center space-between">
            <div class="tm-align-item-center">
              <img class="cs-mr10" src="~/assets/img/logo-2.svg" alt="Logo">
              <div class="tm-right-logo">
                <div>
                  <p class="cs-invoice_number cs-bold cs-primary_color cs-m0 cs-f28">IVONNE SAAS</p>
                  <div class="display-flex">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="display-flex align-item-center">
            <button @click="downloadPdf" id="download_btn" class="cs-invoice_btn btn-blanck cs-primary_color">
              <svg class="cs-primary_color ionicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
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
      </div>
      <div class="display-flex cs-mb25 space-between">
        <div class="cs-invoice_left cs-width_5">
          <b class="cs-primary_color">Ivonne Company,</b>
          <p>365 Bloor Street East, <br> Toronto, Ontario, M4W 3L4, <br> Canada </p>
        </div>
        <div class="cs-invoice_right cs-width_5">
          <b class="cs-primary_color">INVOICE TO:</b>
          <p>
            Invoice # TMT-C-2023-0808 <br> Invoice Date 08 July 2023 <br> Invoice Amount $229.00 (USD) <br> Customer ID
            0708130246 <br>
            <span class="cs-accent_color cs-semi_bold cs-text-cap">PAID</span>
          </p>
        </div>
      </div>
      <div class="display-flex cs-mb25 space-between">
        <div class="cs-invoice_left cs-width_5">
          <b class="cs-primary_color">BILLED TO</b>
          <p>
            Johan Smith <br> Ivonne Company, <br> 365 Bloor Street East, Toronto, <br> Ontario, M4W 3L4, Canada <br>
            subscriber@email.com
          </p>
        </div>
        <div class="cs-invoice_right cs-width_5">
          <b class="cs-primary_color">SUBSCRIPTION:</b>
          <p>
            ID: <span class="cs-primary_color">2d556f-45ghsd-5df4hd-6fhdf-45hd-45f65</span> <br> Billing Period: <span
              class="cs-primary_color">Aug 08, 2023 to Aug 08, 2024</span> <br> Next Billing Date: <span
              class="cs-primary_color">Aug 08, 2024</span>
          </p>
        </div>
      </div>
      <div class="cs-table cs-style2 tm-border-none cs-mb30 padding-rignt-left">
        <div class="tm-border-none">
          <div class="cs-table_responsive tm-custom-td-padding">
            <table class="cs-mb30">
              <div class="tm-border-1px"></div>
              <thead class="border-bottom-1 cs-mb50">
                <tr class="cs-secondary_color">
                  <th class="cs-width_5 cs-normal">DESCRIPTION</th>
                  <th class="cs-width_2 cs-normal">PRICE</th>
                  <th class="cs-width_2 cs-normal">DISCOUNT</th>
                  <th class="cs-width_2 cs-normal cs-text_right">AMOUNT USD</th>
                </tr>
              </thead>
              <tbody class="border-bottom-1">
                <tr>
                  <td class="cs-width_5 cs-primary_color cs-f15">
                    TM-PREMIUM-PKG05
                  </td>
                  <td class="cs-width_2 cs-primary_color cs-f15">$560.00</td>
                  <td class="cs-width_2 cs-primary_color cs-f15">NULL</td>
                  <td class="cs-width_2 cs-text_right cs-primary_color cs-f15">$560</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="display-flex space-between cs-mb50">
        <div class="cs-width_7">
          <p class="cs-primary_color cs-mb3 cs-semi_bold">BANK INFO:</p>
          <p class="cs-lh-165">
            Account Number: <span class="cs-primary_color cs-semi_bold">3752 4521 8465 45621</span> <br> Bank Name:
            <span class="cs-primary_color cs-semi_bold">Canadian Bank</span> <br> Account Holder: <span
              class="cs-primary_color cs-semi_bold">William Stark</span>
          </p>
        </div>
        <div class="cs-width_4">
          <p class="cs-secondary_color cs-text_right cs-f15">Total: <span
              class="cs-ml30 cs-primary_color cs-semi_bold">$560</span> </p>
          <p class="cs-secondary_color cs-text_right cs-f15">Subtotal: <span
              class=" cs-ml30 cs-primary_color cs-semi_bold">$560</span> </p>
          <div class="cs-border-50percent"></div>
          <p class="cs-secondary_color cs-text_right cs-f15 cs-mt15">Amount Due: <span
              class="cs-ml30 cs-primary_color cs-semi_bold">$0.00</span> </p>
          <div class="cs-border-50percent"></div>
        </div>
      </div>
      <div class="cs-text_center cs-mb30">
        <p class="cs-semi_bold cs-primary_color cs-f18 cs-mb10">Thank you for trusting us</p>
        <p class="cs-primary_color cs-f15 cs-mb5">For any queries related to this document please contact us</p>
        <p class="cs-accent_color cs-f15">www.themehouse.com/support</p>
      </div>
      <div class="cs-text_center cs-ternary_color cs-lh-165">
        *EU VAT Directive 2016/8/EC amending directive 2016/112/EC as regards the place of supply of services. VAT
        Number ESB93183344. Commercial Registry of Toronto, volume 4994, sheet 217, page number MA-114039 Ivonne Canada
        HSN Code: 994639 - Canadian Tax
        Serial Number: BV2203437439
      </div>
    </div>
  </div>
</template>

 