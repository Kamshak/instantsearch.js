import { SearchResults } from 'algoliasearch-helper';
import { Hits, InstantSearch } from './instantsearch';
import { InsightsClient } from './insights';

export type RendererOptions<TWidgetParams> = {
  /**
   * Original parameters for this widget.
   * Useful for giving back the render parameters to the renderer.
   */
  widgetParams: TWidgetParams;
  instantSearchInstance: InstantSearch;
  results?: SearchResults;
  hits?: Hits;
  insights?: InsightsClient;
};

export type Renderer<TRenderOptions, TWidgetParams> = (
  renderOptions: TRenderOptions & RendererOptions<TWidgetParams>,
  isFirstRender: boolean
) => void;

export type Unmounter = () => void;
