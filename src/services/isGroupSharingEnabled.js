/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { loadState } from '@nextcloud/initial-state'

const isGroupSharingEnabled = loadState('contacts', 'isGroupSharingEnabled', false)
export default isGroupSharingEnabled
