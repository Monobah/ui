
<script setup>
useHead({
  title: "Receipt Bus Ticket",
})


</script>


<template>
  <div class="cs-container style1">
    <div class="cs-invoice cs-style1 padding_40">
      <div class="cs-invoice_in" id="download_section">
        <div class="cs-invoice_head cs-type1 column border-bottom-none cs-p0">
          <div class="display-flex justify-content-center cs-width_12">
            <div class="cs-text_center">
              <p class="cs-f14 cs-primary_color cs-bold cs-mb2">
                Ivonne Transport Limited <br />Bus Ticket Receipt
              </p>
              <p class="cs-m0 cs-primary_color cs-f12">
                237 Roanoke Road, North York,
              </p>
              <p class="cs-m0 cs-primary_color cs-f12">Ontario, Canada</p>
              <p class="cs-m0 cs-primary_color cs-f12">
                www.ivonnelimited.com
              </p>
            </div>
          </div>
        </div>

        <div class="cs-border cs-mb20 cs-mt12"></div>
        <div>
          <div class="display-flex justify-content-space-between flex-wrap cs-f12">
            <div class="cs-width_6">
              <div class="display-flex">
                <p class="cs-mb5">Date:&nbsp;</p>
                <p class="cs-primary_color cs-mb5">2023-08-10</p>
              </div>
              <div class="display-flex">
                <p class="cs-mb10">Bus Number:&nbsp;</p>
                <p class="cs-primary_color cs-mb10">AB123</p>
              </div>
            </div>
            <div class="cs-width_5">
              <div class="display-flex justify-content-flex-end">
                <p class="cs-mb5">Time:&nbsp;</p>
                <p class="cs-primary_color cs-mb5">09:45 AM</p>
              </div>
              <div class="display-flex justify-content-flex-end">
                <p class="cs-mb10">Seat:&nbsp;</p>
                <p class="cs-primary_color cs-mb10">15B</p>
              </div>
            </div>
          </div>
        </div>
        <div class="cs-border cs-mb10"></div>
        <div class="cs-width_12 cs-f12">
          <div class="display-flex">
            <p class="cs-mb5">Passenger:&nbsp;</p>
            <p class="cs-primary_color cs-mb5">John Doe</p>
          </div>
          <div class="display-flex">
            <p class="cs-mb5">Departure:&nbsp;</p>
            <p class="cs-primary_color cs-mb5">City A</p>
          </div>
          <div class="display-flex">
            <p class="cs-mb10">Destination::&nbsp;</p>
            <p class="cs-primary_color cs-mb10">City B</p>
          </div>
        </div>
        <div class="cs-border cs-mb10"></div>
        <p class="cs-f14 cs-mb10 cs-primary_color cs-bold">
          Ticket Type: One-Way
        </p>
        <div class="cs-border"></div>
        <div class="cs-table cs-style2 padding-rignt-left">
          <table>
            <tbody class="cs-f12 tm-border-none">
              <tr>
                <td class="cs-p0 cs-p-t10 cs-p-b5">Milk (1 gallon)</td>
                <td class="cs-text_right cs-primary_color cs-p0 cs-p-t10 cs-p-b5">
                  $35.88
                </td>
              </tr>
              <tr>
                <td class="cs-p0 cs-p-b5">Potatoes (per pound)</td>
                <td class="cs-text_right cs-primary_color cs-p0 cs-p-b5">
                  $35.88
                </td>
              </tr>
              <tr>
                <td class="cs-p0 cs-p-b10">Onions (per pound)</td>
                <td class="cs-text_right cs-primary_color cs-p0 cs-p-b10">
                  $35.88
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cs-border"></div>
        <div class="cs-table cs-style2 padding-rignt-left">
          <table>
            <tbody class="cs-f12 tm-border-none">
              <tr>
                <td class="cs-p0 cs-p-t10 cs-p-b5">Subtotal:</td>
                <td class="cs-text_right cs-primary_color cs-p0 cs-p-t10 cs-p-b5">
                  $30.50
                </td>
              </tr>
              <tr>
                <td class="cs-p0 cs-p-b5">Tax (5%):</td>
                <td class="cs-text_right cs-primary_color cs-p0 cs-p-b5">
                  $ 1.53
                </td>
              </tr>
              <tr>
                <td class="cs-p0 cs-p-b10">Total:</td>
                <td class="cs-text_right cs-primary_color cs-p0 cs-p-b10">
                  $32.03
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cs-border"></div>
        <div class="cs-table cs-style2 padding-rignt-left">
          <table>
            <tbody class="cs-f12 tm-border-none">
              <tr>
                <td class="cs-p0 cs-p-t10 cs-p-b5">Subtotal:</td>
                <td class="cs-text_right cs-primary_color cs-p0 cs-p-t10 cs-p-b5">
                  $30.50
                </td>
              </tr>
              <tr>
                <td class="cs-p0 cs-p-b5">Tax (5%):</td>
                <td class="cs-text_right cs-primary_color cs-p0 cs-p-b5">
                  $ 1.53
                </td>
              </tr>
              <tr>
                <td class="cs-p0 cs-p-b10">Total:</td>
                <td class="cs-text_right cs-primary_color cs-p0 cs-p-b10">
                  $32.03
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cs-border"></div>
        <div class="cs-table cs-style2 padding-rignt-left">
          <table>
            <tbody class="cs-f12 tm-border-none">
              <tr>
                <td class="cs-p0 cs-p-t10 cs-p-b5">Payment Method:</td>
                <td class="cs-text_right cs-primary_color cs-p0 cs-p-t10 cs-p-b5">
                  Credit Card
                </td>
              </tr>
              <tr>
                <td class="cs-p0 cs-p-b10">Transaction ID:</td>
                <td class="cs-text_right cs-primary_color cs-p0 cs-p-b10">
                  123456789
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cs-border cs-mb30"></div>
        <p class="cs-text_center cs-f14 cs-primary_color">
          Thank you for choosing Bus!
        </p>
      </div>
    </div>
  </div>
</template>

 