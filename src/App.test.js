import renderer from 'react-test-renderer';
import App from './App';

test('Add new Todo', () => {
    const component = renderer.create(
        <App></App>
    )
    expect(component.todos).toBeUndefined();
})
