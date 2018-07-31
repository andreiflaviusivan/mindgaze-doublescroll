# Double scroll bars for Angular
Double horizontal scroll bars for Angular applications. With the 1.1.0 version, support has been added for Angular 6.

## Usage

1. Install via npm
`npm install mindgaze-doublescroll`

2. Make sure you also have jQuery installed. Type `npm install jquery` if not

3. In your *angular.json* make sure that your application scripts include the jquery library
  ```json
  "scripts": [
     "../node_modules/jquery/dist/jquery.js"
  ],
  ```
4. Import the module in your Angular application **app.module.ts**

  `import { DoubleScrollModule } from 'mindgaze-doublescroll';`

5. Use it in your html templates
  ```html
  <mdz-double-scroll>
    ......
  </mdz-double-scroll>
  ```
  
### Important
In your scrollable content, make sure to use `display: table` css styling in order for it to properly detect the size and adapt the layout.

#### Hope this is useful for you folks!