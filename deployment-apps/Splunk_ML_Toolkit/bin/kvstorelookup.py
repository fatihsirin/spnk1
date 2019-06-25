#!/usr/bin/env python
# Copyright (C) 2015-2017 Splunk Inc. All Rights Reserved.
import cexc
from cexc import BaseChunkHandler
from cexc.cexc_anaconda import exec_anaconda_or_die
exec_anaconda_or_die()

from util import command_util, param_util
from util.command_util import GeneratingCommand

logger = cexc.get_logger('kvstorelookup')
messages = cexc.get_messages_logger()


class KVStoreLookupCommand(GeneratingCommand):
    """KVStoreLookupCommand uses the ChunkedController & KVStoreLookupProcessor to read a KVStore collection"""

    @staticmethod
    def handle_arguments(getinfo):
        """Check for invalid arguments and get controller_options.

        Args:
            getinfo (dict): getinfo metadata

        Returns:
            controller_options (dict): controller options
        """
        if len(getinfo['searchinfo']['args']) == 0:
            raise RuntimeError('First argument must be a KVStore collection name')

        controller_options = param_util.parse_args(getinfo['searchinfo']['raw_args'][1:])
        controller_options['namespace'], controller_options['collection_name'] = param_util.parse_namespace_model_name(getinfo['searchinfo']['args'][0])
        controller_options['processor'] = 'KVStoreLookupProcessor'
        return controller_options

    def handler(self, metadata, body):
        """Default handler we override from BaseChunkHandler.

        Args:
            metadata (dict): metadata information
            body (str): data payload from CEXC

        Returns:
            (dict): metadata to be sent back to CEXC
            body (str): data payload to be sent back to CEXC
        """
        if command_util.is_getinfo_chunk(metadata):
            return self.setup()

        # Don't run in preview.
        if self.getinfo.get('preview', False):
            logger.debug('Not running in preview')
            return {'finished': True}

        self.controller.execute()
        body = self.controller.output_results()

        # Final farewell
        return ({'finished': True}, body)


if __name__ == "__main__":
    logger.debug("Starting kvstorelookup.py.")
    KVStoreLookupCommand(handler_data=BaseChunkHandler.DATA_RAW).run()
    logger.debug("Exiting gracefully. Byee!!")