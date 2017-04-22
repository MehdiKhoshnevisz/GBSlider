# GBSlider
This Slider Is An OOP &amp; Component Base And Responsive
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes .
### Prerequisites
> jQuery is needed for this project
```javascript
<script src="jquery.min.js"></script>
```
## Installing
> First add **css** codes of GBSlider in header tag
```css
<link rel="stylesheet" href="css/style.css">
```
> And then add **javascript** codes of GBSlider at the end of body tag
```javascript
<script src="GB_HorizontalSlider.js"></script>
```
## Examples
**You can add html in your project from this way**
> Html
```html
  <div class="Horizontal-slider slider1">
    <div class="items">
      <div class="content" id="draggable1" >
        <div class="item-slider"><img src="img/frontend.png" alt=""></div>
        <div class="item-slider"><img src="img/geekboy.jpg" alt=""></div>
        <div class="item-slider"><img src="img/frontend.png" alt=""></div>
        <div class="item-slider"><img src="img/geekboy.jpg" alt=""></div>
        <div class="item-slider"><img src="img/frontend.png" alt=""></div>
      </div>
    </div>
    <div class="dots"></div>
    <div class="btns">
      <button class="first" type="button" name="button">first</button>
      <button class="prev" type="button" name="button">prev</button>
      <button class="next" type="button" name="button">next</button>
    </div>
  </div>
```
> And then you can run sliders from this way 
```javascript
<script type="text/javascript">
  // Run Sliders
  var slider1 = new GB_Horizontal(".slider1"); // create instance of GB_Horizontal object
  slider1.setParts(3); // its necessary for set number of slider parts
  slider1.setDots(); // you can add dots 
  slider1.timer(1500); // you can add timer for slider (ms)
  .
  .
  .
  // and create more instance for more slider
  </script>

```
### Tip
in css codes the default width of any item in slider is about **33%** , and in js codes the default number of part is **3**
if you change the number part of any item in slider , you must change width of items in css

> for example
if you want the number part be a **2** , so you must set width of items to **50%**
like this : 
```javascript
  var slider1 = new GB_Horizontal(".slider1"); 
  slider1.setParts(2);
```
```css
 .Horizontal-slider .item-slider{
  width : 50%;
}
```
