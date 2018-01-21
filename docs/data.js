var gaugeSource = [["2017-12-22T00:00:00", 1.6], ["2017-12-22T01:00:00", 1.6], ["2017-12-22T02:00:00", 1.6], ["2017-12-22T03:00:00", 1.6], ["2017-12-22T04:00:00", 1.6], ["2017-12-22T05:00:00", 1.6], ["2017-12-22T06:00:00", 1.6], ["2017-12-22T07:00:00", 1.62], ["2017-12-22T08:00:00", 1.63], ["2017-12-22T09:00:00", 1.63], ["2017-12-22T10:00:00", 1.64], ["2017-12-22T11:00:00", 1.64], ["2017-12-22T12:00:00", 1.64], ["2017-12-22T13:00:00", 1.64], ["2017-12-22T14:00:00", 1.64], ["2017-12-22T15:00:00", 1.64], ["2017-12-22T16:00:00", 1.63], ["2017-12-22T17:00:00", 1.63], ["2017-12-22T18:00:00", 1.63], ["2017-12-22T19:00:00", 1.63], ["2017-12-22T20:00:00", 1.63], ["2017-12-22T21:00:00", 1.63], ["2017-12-22T22:00:00", 1.63], ["2017-12-22T23:00:00", 1.63], ["2017-12-23T00:00:00", 1.63], ["2017-12-23T01:00:00", 1.63], ["2017-12-23T02:00:00", 1.64], ["2017-12-23T03:00:00", 1.64], ["2017-12-23T04:00:00", 1.65], ["2017-12-23T05:00:00", 1.66], ["2017-12-23T06:00:00", 1.66], ["2017-12-23T07:00:00", 1.67], ["2017-12-23T08:00:00", 1.69], ["2017-12-23T09:00:00", 1.71], ["2017-12-23T10:00:00", 1.72], ["2017-12-23T11:00:00", 1.73], ["2017-12-23T12:00:00", 1.75], ["2017-12-23T13:00:00", 1.78], ["2017-12-23T14:00:00", 1.8], ["2017-12-23T15:00:00", 1.85], ["2017-12-23T16:00:00", 1.93], ["2017-12-23T17:00:00", 2.06], ["2017-12-23T18:00:00", 2.2], ["2017-12-23T19:00:00", 2.31], ["2017-12-23T20:00:00", 2.36], ["2017-12-23T21:00:00", 2.38], ["2017-12-23T22:00:00", 2.41], ["2017-12-23T23:00:00", 2.43], ["2017-12-24T00:00:00", 2.43], ["2017-12-24T01:00:00", 2.39], ["2017-12-24T02:00:00", 2.35], ["2017-12-24T03:00:00", 2.33], ["2017-12-24T04:00:00", 2.31], ["2017-12-24T05:00:00", 2.3], ["2017-12-24T06:00:00", 2.29], ["2017-12-24T07:00:00", 2.29], ["2017-12-24T08:00:00", 2.28], ["2017-12-24T09:00:00", 2.27], ["2017-12-24T10:00:00", 2.25], ["2017-12-24T11:00:00", 2.24], ["2017-12-24T12:00:00", 2.24], ["2017-12-24T13:00:00", 2.24], ["2017-12-24T14:00:00", 2.24], ["2017-12-24T15:00:00", 2.24], ["2017-12-24T16:00:00", 2.25], ["2017-12-24T17:00:00", 2.27], ["2017-12-24T18:00:00", 2.28], ["2017-12-24T19:00:00", 2.3], ["2017-12-24T20:00:00", 2.3], ["2017-12-24T21:00:00", 2.3], ["2017-12-24T22:00:00", 2.3], ["2017-12-24T23:00:00", 2.3], ["2017-12-25T00:00:00", 2.32], ["2017-12-25T01:00:00", 2.32], ["2017-12-25T02:00:00", 2.32], ["2017-12-25T03:00:00", 2.32], ["2017-12-25T04:00:00", 2.32], ["2017-12-25T05:00:00", 2.32], ["2017-12-25T06:00:00", 2.32], ["2017-12-25T07:00:00", 2.32], ["2017-12-25T08:00:00", 2.32], ["2017-12-25T09:00:00", 2.32], ["2017-12-25T10:00:00", 2.32], ["2017-12-25T11:00:00", 2.31], ["2017-12-25T12:00:00", 2.29], ["2017-12-25T13:00:00", 2.28], ["2017-12-25T14:00:00", 2.26], ["2017-12-25T15:00:00", 2.24], ["2017-12-25T16:00:00", 2.24], ["2017-12-25T17:00:00", 2.22], ["2017-12-25T18:00:00", 2.21], ["2017-12-25T19:00:00", 2.2], ["2017-12-25T20:00:00", 2.2], ["2017-12-25T21:00:00", 2.19], ["2017-12-25T22:00:00", 2.19], ["2017-12-25T23:00:00", 2.16], ["2017-12-26T00:00:00", 2.16], ["2017-12-26T01:00:00", 2.15], ["2017-12-26T02:00:00", 2.14], ["2017-12-26T03:00:00", 2.14], ["2017-12-26T04:00:00", 2.12], ["2017-12-26T05:00:00", 2.12], ["2017-12-26T06:00:00", 2.12], ["2017-12-26T07:00:00", 2.1], ["2017-12-26T08:00:00", 2.08], ["2017-12-26T09:00:00", 2.08], ["2017-12-26T10:00:00", 2.07], ["2017-12-26T11:00:00", 2.06], ["2017-12-26T12:00:00", 2.05], ["2017-12-26T13:00:00", 2.04], ["2017-12-26T14:00:00", 2.04], ["2017-12-26T15:00:00", 2.03], ["2017-12-26T16:00:00", 2.02], ["2017-12-26T17:00:00", 2.01], ["2017-12-26T18:00:00", 2.0], ["2017-12-26T19:00:00", 1.99], ["2017-12-26T20:00:00", 1.98], ["2017-12-26T21:00:00", 1.97], ["2017-12-26T22:00:00", 1.96], ["2017-12-26T23:00:00", 1.96], ["2017-12-27T00:00:00", 1.96], ["2017-12-27T01:00:00", 1.96], ["2017-12-27T02:00:00", 1.96], ["2017-12-27T03:00:00", 1.96], ["2017-12-27T04:00:00", 1.96], ["2017-12-27T05:00:00", 1.96], ["2017-12-27T06:00:00", 1.96], ["2017-12-27T07:00:00", 1.95], ["2017-12-27T08:00:00", 1.95], ["2017-12-27T09:00:00", 1.94], ["2017-12-27T10:00:00", 1.93], ["2017-12-27T11:00:00", 1.92], ["2017-12-27T12:00:00", 1.92], ["2017-12-27T13:00:00", 1.92], ["2017-12-27T14:00:00", 1.92], ["2017-12-27T15:00:00", 1.92], ["2017-12-27T16:00:00", 1.92], ["2017-12-27T17:00:00", 1.92], ["2017-12-27T18:00:00", 1.91], ["2017-12-27T19:00:00", 1.9], ["2017-12-27T20:00:00", 1.89], ["2017-12-27T21:00:00", 1.87], ["2017-12-27T22:00:00", 1.86], ["2017-12-27T23:00:00", 1.84], ["2017-12-28T00:00:00", 1.83], ["2017-12-28T01:00:00", 1.82], ["2017-12-28T02:00:00", 1.82], ["2017-12-28T03:00:00", 1.82], ["2017-12-28T04:00:00", 1.82], ["2017-12-28T05:00:00", 1.81], ["2017-12-28T06:00:00", 1.81], ["2017-12-28T07:00:00", 1.82], ["2017-12-28T08:00:00", 1.83], ["2017-12-28T09:00:00", 1.84], ["2017-12-28T10:00:00", 1.88], ["2017-12-28T11:00:00", 2.01], ["2017-12-28T12:00:00", 2.08], ["2017-12-28T13:00:00", 2.08], ["2017-12-28T14:00:00", 2.05], ["2017-12-28T15:00:00", 2.02], ["2017-12-28T16:00:00", 1.99], ["2017-12-28T17:00:00", 1.97], ["2017-12-28T18:00:00", 1.94], ["2017-12-28T19:00:00", 1.97], ["2017-12-28T20:00:00", 1.97], ["2017-12-28T21:00:00", 2.06], ["2017-12-28T22:00:00", 2.17], ["2017-12-28T23:00:00", 2.33], ["2017-12-29T00:00:00", 2.36], ["2017-12-29T01:00:00", 2.33], ["2017-12-29T02:00:00", 2.3], ["2017-12-29T03:00:00", 2.28], ["2017-12-29T04:00:00", 2.28], ["2017-12-29T05:00:00", 2.28], ["2017-12-29T06:00:00", 2.27], ["2017-12-29T07:00:00", 2.26], ["2017-12-29T08:00:00", 2.25], ["2017-12-29T09:00:00", 2.25], ["2017-12-29T10:00:00", 2.26], ["2017-12-29T11:00:00", 2.24], ["2017-12-29T12:00:00", 2.24], ["2017-12-29T13:00:00", 2.25], ["2017-12-29T14:00:00", 2.24], ["2017-12-29T15:00:00", 2.16], ["2017-12-29T16:00:00", 2.19], ["2017-12-29T17:00:00", 2.3], ["2017-12-29T18:00:00", 2.31], ["2017-12-29T19:00:00", 2.26], ["2017-12-29T20:00:00", 2.17], ["2017-12-29T21:00:00", 2.09], ["2017-12-29T22:00:00", 2.03], ["2017-12-29T23:00:00", 2.01], ["2017-12-30T00:00:00", 2.0], ["2017-12-30T01:00:00", 1.99], ["2017-12-30T02:00:00", 1.98], ["2017-12-30T03:00:00", 1.95], ["2017-12-30T04:00:00", 1.91], ["2017-12-30T05:00:00", 1.92], ["2017-12-30T06:00:00", 1.98], ["2017-12-30T07:00:00", 2.07], ["2017-12-30T08:00:00", 2.14], ["2017-12-30T09:00:00", 2.2], ["2017-12-30T10:00:00", 2.2], ["2017-12-30T11:00:00", 2.28], ["2017-12-30T12:00:00", 2.4], ["2017-12-30T13:00:00", 2.51], ["2017-12-30T14:00:00", 2.58], ["2017-12-30T15:00:00", 2.56], ["2017-12-30T16:00:00", 2.5], ["2017-12-30T17:00:00", 2.44], ["2017-12-30T18:00:00", 2.42], ["2017-12-30T19:00:00", 2.4], ["2017-12-30T20:00:00", 2.35], ["2017-12-30T21:00:00", 2.3], ["2017-12-30T22:00:00", 2.27], ["2017-12-30T23:00:00", 2.25], ["2017-12-31T00:00:00", 2.25], ["2017-12-31T01:00:00", 2.24], ["2017-12-31T02:00:00", 2.19], ["2017-12-31T03:00:00", 2.24], ["2017-12-31T04:00:00", 2.27], ["2017-12-31T05:00:00", 2.3], ["2017-12-31T06:00:00", 2.32], ["2017-12-31T07:00:00", 2.32], ["2017-12-31T08:00:00", 2.33], ["2017-12-31T09:00:00", 2.48], ["2017-12-31T10:00:00", 2.48], ["2017-12-31T11:00:00", 2.56], ["2017-12-31T12:00:00", 2.6], ["2017-12-31T13:00:00", 2.8], ["2017-12-31T14:00:00", 3.07], ["2017-12-31T15:00:00", 3.14], ["2017-12-31T16:00:00", 3.14], ["2017-12-31T17:00:00", 3.14], ["2017-12-31T18:00:00", 3.17], ["2017-12-31T19:00:00", 3.2], ["2017-12-31T20:00:00", 3.2], ["2017-12-31T21:00:00", 3.19], ["2017-12-31T22:00:00", 3.14], ["2017-12-31T23:00:00", 3.08], ["2018-01-01T00:00:00", 3.02], ["2018-01-01T01:00:00", 2.98], ["2018-01-01T02:00:00", 2.98], ["2018-01-01T03:00:00", 2.95], ["2018-01-01T04:00:00", 2.91], ["2018-01-01T05:00:00", 2.88], ["2018-01-01T06:00:00", 2.85], ["2018-01-01T07:00:00", 2.82], ["2018-01-01T08:00:00", 2.8], ["2018-01-01T09:00:00", 2.8], ["2018-01-01T10:00:00", 2.8], ["2018-01-01T11:00:00", 2.8], ["2018-01-01T12:00:00", 2.84], ["2018-01-01T13:00:00", 2.96], ["2018-01-01T14:00:00", 3.08], ["2018-01-01T15:00:00", 3.1], ["2018-01-01T16:00:00", 3.08], ["2018-01-01T17:00:00", 3.02], ["2018-01-01T18:00:00", 2.98], ["2018-01-01T19:00:00", 2.95], ["2018-01-01T20:00:00", 2.95], ["2018-01-01T21:00:00", 2.95], ["2018-01-01T22:00:00", 2.97], ["2018-01-01T23:00:00", 3.0], ["2018-01-02T00:00:00", 3.02], ["2018-01-02T01:00:00", 3.02], ["2018-01-02T02:00:00", 3.02], ["2018-01-02T03:00:00", 3.01], ["2018-01-02T04:00:00", 2.98], ["2018-01-02T05:00:00", 2.95], ["2018-01-02T06:00:00", 2.92], ["2018-01-02T07:00:00", 2.89], ["2018-01-02T08:00:00", 2.85], ["2018-01-02T09:00:00", 2.82], ["2018-01-02T10:00:00", 2.81], ["2018-01-02T11:00:00", 2.81], ["2018-01-02T12:00:00", 2.86], ["2018-01-02T13:00:00", 2.92], ["2018-01-02T14:00:00", 2.96], ["2018-01-02T15:00:00", 2.96], ["2018-01-02T16:00:00", 2.91], ["2018-01-02T17:00:00", 2.86], ["2018-01-02T18:00:00", 2.84], ["2018-01-02T19:00:00", 2.83], ["2018-01-02T20:00:00", 2.84], ["2018-01-02T21:00:00", 2.87], ["2018-01-02T22:00:00", 2.92], ["2018-01-02T23:00:00", 2.94], ["2018-01-03T00:00:00", 2.95], ["2018-01-03T01:00:00", 2.94], ["2018-01-03T02:00:00", 2.91], ["2018-01-03T03:00:00", 2.87], ["2018-01-03T04:00:00", 2.83], ["2018-01-03T05:00:00", 2.79], ["2018-01-03T06:00:00", 2.76], ["2018-01-03T07:00:00", 2.73], ["2018-01-03T08:00:00", 2.71], ["2018-01-03T09:00:00", 2.7], ["2018-01-03T10:00:00", 2.7], ["2018-01-03T11:00:00", 2.7], ["2018-01-03T12:00:00", 2.73], ["2018-01-03T13:00:00", 2.76], ["2018-01-03T14:00:00", 2.78], ["2018-01-03T15:00:00", 2.79], ["2018-01-03T16:00:00", 2.79], ["2018-01-03T17:00:00", 2.76], ["2018-01-03T18:00:00", 2.76], ["2018-01-03T19:00:00", 2.77], ["2018-01-03T20:00:00", 2.8], ["2018-01-03T21:00:00", 2.82], ["2018-01-03T22:00:00", 2.84], ["2018-01-03T23:00:00", 2.85], ["2018-01-04T00:00:00", 2.85], ["2018-01-04T01:00:00", 2.84], ["2018-01-04T02:00:00", 2.82], ["2018-01-04T03:00:00", 2.8], ["2018-01-04T04:00:00", 2.77], ["2018-01-04T05:00:00", 2.76], ["2018-01-04T06:00:00", 2.74], ["2018-01-04T07:00:00", 2.72], ["2018-01-04T08:00:00", 2.71], ["2018-01-04T09:00:00", 2.7], ["2018-01-04T10:00:00", 2.68], ["2018-01-04T11:00:00", 2.67], ["2018-01-04T12:00:00", 2.64], ["2018-01-04T13:00:00", 2.62], ["2018-01-04T14:00:00", 2.61], ["2018-01-04T15:00:00", 2.61], ["2018-01-04T16:00:00", 2.63], ["2018-01-04T17:00:00", 2.65], ["2018-01-04T18:00:00", 2.65], ["2018-01-04T19:00:00", 2.61], ["2018-01-04T20:00:00", 2.57], ["2018-01-04T21:00:00", 2.53], ["2018-01-04T22:00:00", 2.52], ["2018-01-04T23:00:00", 2.52], ["2018-01-05T00:00:00", 2.52], ["2018-01-05T01:00:00", 2.52], ["2018-01-05T02:00:00", 2.5], ["2018-01-05T03:00:00", 2.47], ["2018-01-05T04:00:00", 2.44], ["2018-01-05T05:00:00", 2.42], ["2018-01-05T06:00:00", 2.41], ["2018-01-05T07:00:00", 2.4], ["2018-01-05T08:00:00", 2.4], ["2018-01-05T09:00:00", 2.39], ["2018-01-05T10:00:00", 2.38], ["2018-01-05T11:00:00", 2.38], ["2018-01-05T12:00:00", 2.38], ["2018-01-05T13:00:00", 2.38], ["2018-01-05T14:00:00", 2.37], ["2018-01-05T15:00:00", 2.37], ["2018-01-05T16:00:00", 2.36], ["2018-01-05T17:00:00", 2.34], ["2018-01-05T18:00:00", 2.32], ["2018-01-05T19:00:00", 2.3], ["2018-01-05T20:00:00", 2.28], ["2018-01-05T21:00:00", 2.28], ["2018-01-05T22:00:00", 2.3], ["2018-01-05T23:00:00", 2.35], ["2018-01-06T00:00:00", 2.4], ["2018-01-06T01:00:00", 2.44], ["2018-01-06T02:00:00", 2.48], ["2018-01-06T03:00:00", 2.49], ["2018-01-06T04:00:00", 2.5], ["2018-01-06T05:00:00", 2.5], ["2018-01-06T06:00:00", 2.48], ["2018-01-06T07:00:00", 2.45], ["2018-01-06T08:00:00", 2.4], ["2018-01-06T09:00:00", 2.36], ["2018-01-06T10:00:00", 2.33], ["2018-01-06T11:00:00", 2.3], ["2018-01-06T12:00:00", 2.3], ["2018-01-06T13:00:00", 2.31], ["2018-01-06T14:00:00", 2.31], ["2018-01-06T15:00:00", 2.32], ["2018-01-06T16:00:00", 2.32], ["2018-01-06T17:00:00", 2.31], ["2018-01-06T18:00:00", 2.28], ["2018-01-06T19:00:00", 2.25], ["2018-01-06T20:00:00", 2.24], ["2018-01-06T21:00:00", 2.24], ["2018-01-06T22:00:00", 2.24], ["2018-01-06T23:00:00", 2.28], ["2018-01-07T00:00:00", 2.34], ["2018-01-07T01:00:00", 2.39], ["2018-01-07T02:00:00", 2.4], ["2018-01-07T03:00:00", 2.45], ["2018-01-07T04:00:00", 2.45], ["2018-01-07T05:00:00", 2.45], ["2018-01-07T06:00:00", 2.43], ["2018-01-07T07:00:00", 2.4], ["2018-01-07T08:00:00", 2.36], ["2018-01-07T09:00:00", 2.33], ["2018-01-07T10:00:00", 2.3], ["2018-01-07T11:00:00", 2.28], ["2018-01-07T12:00:00", 2.27], ["2018-01-07T13:00:00", 2.28], ["2018-01-07T14:00:00", 2.28], ["2018-01-07T15:00:00", 2.28], ["2018-01-07T16:00:00", 2.28], ["2018-01-07T17:00:00", 2.28], ["2018-01-07T18:00:00", 2.26], ["2018-01-07T19:00:00", 2.25], ["2018-01-07T20:00:00", 2.25], ["2018-01-07T21:00:00", 2.26], ["2018-01-07T22:00:00", 2.3], ["2018-01-07T23:00:00", 2.35], ["2018-01-08T00:00:00", 2.4], ["2018-01-08T01:00:00", 2.43], ["2018-01-08T02:00:00", 2.44], ["2018-01-08T03:00:00", 2.44], ["2018-01-08T04:00:00", 2.44], ["2018-01-08T05:00:00", 2.42], ["2018-01-08T06:00:00", 2.4], ["2018-01-08T07:00:00", 2.38], ["2018-01-08T08:00:00", 2.36], ["2018-01-08T09:00:00", 2.35], ["2018-01-08T10:00:00", 2.33], ["2018-01-08T11:00:00", 2.32], ["2018-01-08T12:00:00", 2.32], ["2018-01-08T13:00:00", 2.33], ["2018-01-08T14:00:00", 2.34], ["2018-01-08T15:00:00", 2.34], ["2018-01-08T16:00:00", 2.34], ["2018-01-08T17:00:00", 2.33], ["2018-01-08T18:00:00", 2.33], ["2018-01-08T19:00:00", 2.33], ["2018-01-08T20:00:00", 2.33], ["2018-01-08T21:00:00", 2.34], ["2018-01-08T22:00:00", 2.34], ["2018-01-08T23:00:00", 2.35], ["2018-01-09T00:00:00", 2.35], ["2018-01-09T01:00:00", 2.35], ["2018-01-09T02:00:00", 2.35], ["2018-01-09T03:00:00", 2.35], ["2018-01-09T04:00:00", 2.34], ["2018-01-09T05:00:00", 2.34], ["2018-01-09T06:00:00", 2.34], ["2018-01-09T07:00:00", 2.33], ["2018-01-09T08:00:00", 2.33], ["2018-01-09T09:00:00", 2.33], ["2018-01-09T10:00:00", 2.32], ["2018-01-09T11:00:00", 2.32], ["2018-01-09T12:00:00", 2.33], ["2018-01-09T13:00:00", 2.34], ["2018-01-09T14:00:00", 2.35], ["2018-01-09T15:00:00", 2.36], ["2018-01-09T16:00:00", 2.36], ["2018-01-09T17:00:00", 2.36], ["2018-01-09T18:00:00", 2.36], ["2018-01-09T19:00:00", 2.36], ["2018-01-09T20:00:00", 2.36], ["2018-01-09T21:00:00", 2.36], ["2018-01-09T22:00:00", 2.35], ["2018-01-09T23:00:00", 2.35], ["2018-01-10T00:00:00", 2.34], ["2018-01-10T01:00:00", 2.34], ["2018-01-10T02:00:00", 2.34], ["2018-01-10T03:00:00", 2.33], ["2018-01-10T04:00:00", 2.32], ["2018-01-10T05:00:00", 2.31], ["2018-01-10T06:00:00", 2.3], ["2018-01-10T07:00:00", 2.3], ["2018-01-10T08:00:00", 2.3], ["2018-01-10T09:00:00", 2.3], ["2018-01-10T10:00:00", 2.3], ["2018-01-10T11:00:00", 2.3], ["2018-01-10T12:00:00", 2.3], ["2018-01-10T13:00:00", 2.33], ["2018-01-10T14:00:00", 2.33], ["2018-01-10T15:00:00", 2.33], ["2018-01-10T16:00:00", 2.33], ["2018-01-10T17:00:00", 2.33], ["2018-01-10T18:00:00", 2.32], ["2018-01-10T19:00:00", 2.32], ["2018-01-10T20:00:00", 2.32], ["2018-01-10T21:00:00", 2.32], ["2018-01-10T22:00:00", 2.31], ["2018-01-10T23:00:00", 2.3], ["2018-01-11T00:00:00", 2.29], ["2018-01-11T01:00:00", 2.28], ["2018-01-11T02:00:00", 2.28], ["2018-01-11T03:00:00", 2.28], ["2018-01-11T04:00:00", 2.28], ["2018-01-11T05:00:00", 2.29], ["2018-01-11T06:00:00", 2.31], ["2018-01-11T07:00:00", 2.32], ["2018-01-11T08:00:00", 2.32], ["2018-01-11T09:00:00", 2.32], ["2018-01-11T10:00:00", 2.32], ["2018-01-11T11:00:00", 2.32], ["2018-01-11T12:00:00", 2.32], ["2018-01-11T13:00:00", 2.32], ["2018-01-11T14:00:00", 2.32], ["2018-01-11T15:00:00", 2.32], ["2018-01-11T16:00:00", 2.32], ["2018-01-11T17:00:00", 2.32], ["2018-01-11T18:00:00", 2.32], ["2018-01-11T19:00:00", 2.32], ["2018-01-11T20:00:00", 2.32], ["2018-01-11T21:00:00", 2.32], ["2018-01-11T22:00:00", 2.32], ["2018-01-11T23:00:00", 2.31], ["2018-01-12T00:00:00", 2.31], ["2018-01-12T01:00:00", 2.31], ["2018-01-12T02:00:00", 2.32], ["2018-01-12T03:00:00", 2.33], ["2018-01-12T04:00:00", 2.34], ["2018-01-12T05:00:00", 2.35], ["2018-01-12T06:00:00", 2.36], ["2018-01-12T07:00:00", 2.37], ["2018-01-12T08:00:00", 2.39], ["2018-01-12T09:00:00", 2.45], ["2018-01-12T10:00:00", 2.51], ["2018-01-12T11:00:00", 2.51], ["2018-01-12T12:00:00", 2.55], ["2018-01-12T13:00:00", 2.58], ["2018-01-16T06:00:00", 3.73], ["2018-01-16T07:00:00", 3.72], ["2018-01-16T08:00:00", 3.69], ["2018-01-16T09:00:00", 3.68], ["2018-01-16T10:00:00", 3.66], ["2018-01-16T11:00:00", 3.64], ["2018-01-16T12:00:00", 3.63], ["2018-01-16T13:00:00", 3.62], ["2018-01-16T14:00:00", 3.61], ["2018-01-16T15:00:00", 3.61], ["2018-01-16T16:00:00", 3.59], ["2018-01-16T17:00:00", 3.58], ["2018-01-16T18:00:00", 3.56], ["2018-01-16T19:00:00", 3.55], ["2018-01-16T20:00:00", 3.53], ["2018-01-16T21:00:00", 3.52], ["2018-01-16T22:00:00", 3.51], ["2018-01-16T23:00:00", 3.49], ["2018-01-17T00:00:00", 3.49], ["2018-01-17T01:00:00", 3.48], ["2018-01-17T02:00:00", 3.47], ["2018-01-17T03:00:00", 3.47], ["2018-01-17T04:00:00", 3.45], ["2018-01-17T05:00:00", 3.44], ["2018-01-17T06:00:00", 3.42], ["2018-01-17T07:00:00", 3.42], ["2018-01-17T08:00:00", 3.4], ["2018-01-17T09:00:00", 3.39], ["2018-01-17T10:00:00", 3.38], ["2018-01-17T11:00:00", 3.35], ["2018-01-17T14:00:00", 3.3], ["2018-01-17T15:00:00", 3.3], ["2018-01-17T16:00:00", 3.28], ["2018-01-17T17:00:00", 3.27], ["2018-01-17T18:00:00", 3.26], ["2018-01-17T19:00:00", 3.25], ["2018-01-17T20:00:00", 3.24], ["2018-01-17T21:00:00", 3.23], ["2018-01-17T22:00:00", 3.22], ["2018-01-17T23:00:00", 3.21], ["2018-01-18T00:00:00", 3.19], ["2018-01-18T01:00:00", 3.17], ["2018-01-18T02:00:00", 3.14], ["2018-01-18T03:00:00", 3.12], ["2018-01-18T04:00:00", 3.1], ["2018-01-18T05:00:00", 3.09], ["2018-01-18T06:00:00", 3.07], ["2018-01-18T07:00:00", 3.06], ["2018-01-18T08:00:00", 3.04], ["2018-01-18T09:00:00", 3.03], ["2018-01-18T10:00:00", 3.01], ["2018-01-18T11:00:00", 2.99], ["2018-01-18T12:00:00", 2.98], ["2018-01-18T13:00:00", 2.97], ["2018-01-18T14:00:00", 2.97], ["2018-01-18T15:00:00", 2.96], ["2018-01-18T16:00:00", 2.97], ["2018-01-18T17:00:00", 2.98], ["2018-01-18T18:00:00", 2.97], ["2018-01-18T19:00:00", 2.94], ["2018-01-18T20:00:00", 2.89], ["2018-01-18T21:00:00", 2.83], ["2018-01-18T22:00:00", 2.79], ["2018-01-18T23:00:00", 2.75], ["2018-01-19T00:00:00", 2.73], ["2018-01-19T01:00:00", 2.72], ["2018-01-19T02:00:00", 2.71], ["2018-01-19T03:00:00", 2.71], ["2018-01-19T04:00:00", 2.72], ["2018-01-19T05:00:00", 2.72], ["2018-01-19T06:00:00", 2.72], ["2018-01-19T07:00:00", 2.73], ["2018-01-19T08:00:00", 2.73], ["2018-01-19T09:00:00", 2.73], ["2018-01-19T10:00:00", 2.73], ["2018-01-19T11:00:00", 2.7], ["2018-01-19T12:00:00", 2.68], ["2018-01-19T13:00:00", 2.66], ["2018-01-19T14:00:00", 2.64], ["2018-01-19T15:00:00", 2.63], ["2018-01-19T16:00:00", 2.63], ["2018-01-19T17:00:00", 2.64], ["2018-01-19T18:00:00", 2.66], ["2018-01-19T19:00:00", 2.66], ["2018-01-19T20:00:00", 2.64], ["2018-01-19T21:00:00", 2.62], ["2018-01-19T22:00:00", 2.61], ["2018-01-19T23:00:00", 2.61], ["2018-01-20T00:00:00", 2.61], ["2018-01-20T01:00:00", 2.62], ["2018-01-20T02:00:00", 2.63], ["2018-01-20T03:00:00", 2.63], ["2018-01-20T04:00:00", 2.62], ["2018-01-20T05:00:00", 2.62], ["2018-01-20T06:00:00", 2.63], ["2018-01-20T07:00:00", 2.64], ["2018-01-20T08:00:00", 2.66], ["2018-01-20T09:00:00", 2.66], ["2018-01-20T10:00:00", 2.65], ["2018-01-20T11:00:00", 2.65], ["2018-01-20T12:00:00", 2.64], ["2018-01-20T13:00:00", 2.63], ["2018-01-20T14:00:00", 2.63], ["2018-01-20T15:00:00", 2.62], ["2018-01-20T16:00:00", 2.61], ["2018-01-20T17:00:00", 2.6], ["2018-01-20T18:00:00", 2.59], ["2018-01-20T19:00:00", 2.58], ["2018-01-20T20:00:00", 2.58], ["2018-01-20T21:00:00", 2.58], ["2018-01-20T22:00:00", 2.58], ["2018-01-20T23:00:00", 2.58]];
var precipSource = [["2017-12-22T00:00:00", 0.25], ["2017-12-23T00:00:00", 17.02], ["2017-12-24T00:00:00", 3.56], ["2017-12-25T00:00:00", 1.27], ["2017-12-26T00:00:00", null], ["2017-12-27T00:00:00", null], ["2017-12-28T00:00:00", null], ["2017-12-29T00:00:00", null], ["2017-12-30T00:00:00", 1.27], ["2017-12-31T00:00:00", null], ["2018-01-01T00:00:00", null], ["2018-01-02T00:00:00", null], ["2018-01-03T00:00:00", null], ["2018-01-04T00:00:00", 1.27], ["2018-01-05T00:00:00", null], ["2018-01-06T00:00:00", null], ["2018-01-07T00:00:00", null], ["2018-01-08T00:00:00", 1.78], ["2018-01-09T00:00:00", null], ["2018-01-10T00:00:00", null], ["2018-01-11T00:00:00", 0.25], ["2018-01-12T00:00:00", 19.81], ["2018-01-13T00:00:00", 19.05], ["2018-01-14T00:00:00", null], ["2018-01-15T00:00:00", null], ["2018-01-16T00:00:00", 1.78], ["2018-01-17T00:00:00", 1.02], ["2018-01-18T00:00:00", null], ["2018-01-19T00:00:00", null], ["2018-01-20T00:00:00", null]];