import React, { useMemo } from 'react'
import {
  GU,
  useTheme,
  ContextMenu,
  ContextMenuItem,
  IconView,
  useLayout,
} from '@aragon/ui'
import PropTypes from 'prop-types'

function VersionHistory({ items }) {
  const itemsToRender = useMemo(
    () =>
      items.map((item, i) => {
        return {
          title:
            i === items.length - 1 ? 'Created Agreement' : 'Updated Agreement',
          date: item,
        }
      }),
    [items]
  )

  return (
    <React.Fragment>
      {itemsToRender.map(({ title, date }, i) => (
        <HistoryEntry title={title} date={date} key={i} />
      ))}
    </React.Fragment>
  )
}

/* eslint-disable react/prop-types */
function HistoryEntry({ title, date }) {
  const theme = useTheme()
  const { layoutName } = useLayout()

  return (
    <div
      css={`
        display: flex;
        justify-content: space-between;
        padding: ${layoutName === 'small' ? 2 * GU : 3 * GU}px;
        & + & {
          border-top: 1px solid ${theme.border};
        }
      `}
    >
      <div>
        <h2
          css={`
            line-height: 1.1;
            margin-bottom: ${1 * GU}px;
          `}
        >
          {title}
        </h2>
        <p
          css={`
            line-height: 1.1;
            color: ${theme.surfaceContentSecondary};
          `}
        >
          {date}
        </p>
      </div>
      <div>
        <ContextMenu>
          <ContextMenuItem>
            <span
              css={`
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${theme.surfaceIcon};
              `}
            >
              <IconView />
            </span>
            <span
              css={`
                margin-left: ${1 * GU}px;
              `}
            >
              Review this version
            </span>
          </ContextMenuItem>
        </ContextMenu>
      </div>
    </div>
  )
}
/* eslint-disable react/prop-types */

VersionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
}

export default VersionHistory