# jQuery Region Selector
This plugin is intended to solve a common problem with creating forms where a user selects their country and state/province. When used correctly, it will automatically populate the country field, and when they select their country it will automatically fill the state/province field with the regions in that country.

## Usage
Install the package:

`bower install jquery-region`

Add the script to the page where your form is present:

```html
<script type="text/javascript" src="/path/to/jquery.region.min.js"></script>
```

Add the data attribute to your country and select fields. It's irrelevant what you name the field, `data-region-src` tags must match exactly, and they must be bound to a `<select>` field.

```html
<select name="country" data-region-src="country"></select>
<select name="state" data-region-src="state"></select>
```

The data should automatically populate, and the events should automatically be bound. If you have a use case where a form was created dynamically after the initial page load, you can call the following command to reinitialize the plugin:

```javascript
$.regionSelector.bind();
```

## License
MIT - See license file for details

## Contributing
Contributions are welcome and encouraged, submit a pull request!

## Acknowledgements
* The initial data dump was based on work done by [SHAFIUL AZAM](https://bdhacker.wordpress.com/2009/11/21/adding-dropdown-country-state-list-dynamically-into-your-html-form-by-javascript/)
