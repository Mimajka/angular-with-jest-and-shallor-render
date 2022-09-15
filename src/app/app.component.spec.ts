import { AppComponent } from './app.component';
import {Shallow} from 'shallow-render/dist';
import {AppModule} from './app.module';

describe('AppComponent', () => {
  let shallow: Shallow<AppComponent>;

  beforeEach(() => {
    shallow = new Shallow(AppComponent, AppModule);
  });

  it('should match snapshot', async () => {
    const { fixture } = await shallow.render();

    expect(fixture).toMatchSnapshot();
  });
});
